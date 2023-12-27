import { useCallback, useEffect, useRef, useState } from "react";

import { IPlayerElement } from "../../interfaces/player-element.interface";

import { UsePlayer } from "./usePlayer.interface";

export const usePlayer: UsePlayer = ({ options }) => {
	const playerRef = useRef<IPlayerElement>(null);
	const progressBarRef = useRef<HTMLDivElement>(null);

	const [isTouched, setTouched] = useState(false);
	const [isFocused, setFocused] = useState(false);
	const [isPlaying, setPlaying] = useState(options.autoPlay);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [progress, setProgress] = useState(0);

	// Update progress for video (progress, currentTime)
	const updateProgress = useCallback(() => {
		if (playerRef.current) {
			setCurrentTime(playerRef.current.currentTime);
			setProgress((playerRef.current.currentTime / duration) * 100);
		}
	}, [duration]);

	// Toggle video playing
	const togglePlaying = useCallback(async () => {
		if (!isTouched) setTouched(true);

		if (!isPlaying) {
			playerRef.current?.play();
			setPlaying(true);
		} else {
			playerRef.current?.pause();
			setPlaying(false);
		}
	}, [isPlaying]);

	// * Set original duration of video ⏲
	useEffect(() => {
		const duration = playerRef.current?.duration;

		if (duration) {
			setDuration(duration);
		}
	}, [playerRef.current?.duration]);

	// * Event listeners for Focus 🎣
	useEffect(() => {
		const handleFocus = (e: MouseEvent) => {
			if (e.target === playerRef.current) {
				return setFocused(true);
			}

			setFocused(false);
		};

		document.addEventListener("click", handleFocus);
		return () => document.removeEventListener("click", handleFocus);
	}, []);

	// * Event listener for Dragging Progress bar
	useEffect(() => {
		const progressBarElement = progressBarRef.current;

		const updateCurrentTime = (e: MouseEvent) => {
			const progressRect = progressBarElement?.getBoundingClientRect();

			if (progressRect && playerRef.current) {
				const x = e.clientX - progressRect.left;
				const width = progressRect.width;
				const percent = x / width;
				const duration = playerRef.current.duration;

				playerRef.current.currentTime = percent * duration;

				updateProgress();
			}
		};

		const handleProgressDrag = (e: MouseEvent) => {
			updateCurrentTime(e);
		};

		progressBarElement?.addEventListener("pointerdown", handleProgressDrag);

		return () => {
			progressBarElement?.removeEventListener("pointerdown", handleProgressDrag);
		};
	}, [updateProgress]);

	// * Enable/Disable Fullscreen 💻
	const toggleFullscreen = async () => {
		const player = playerRef.current;

		if (!player) return undefined;
		if (player.requestFullscreen) return player.requestFullscreen();
		if (player.msRequestFullscreen) return player.msRequestFullscreen();
		if (player.mozRequestFullscreen) return player.mozRequestFullscreen();
		if (player.webkitRequestFullscreen) return player.webkitRequestFullscreen();
	};

	// * Rewind video ⏲
	const rewind = useCallback((time: number) => {
		if (playerRef.current) {
			playerRef.current.currentTime += time;
		}
	}, []);

	const forward = useCallback(() => {
		rewind(options.rewindTime);
	}, [rewind, options]);

	const backward = useCallback(() => {
		rewind(-options.rewindTime);
	}, [rewind, options]);

	// * Event listener for Updating time ⏲
	useEffect(() => {
		const player = playerRef.current;

		if (!player) return undefined;

		player.addEventListener("timeupdate", updateProgress);
		return () => player.removeEventListener("timeupdate", updateProgress);
	}, [duration]);

	// * Event listener for Hotkeys 🔥
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isFocused) {
				switch (e.key) {
					case "ArrowRight":
						return forward();
					case "ArrowLeft":
						return backward();
					case "f":
						return toggleFullscreen();
					case " ": {
						e.preventDefault();
						return togglePlaying();
					}
					default:
						return null;
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [togglePlaying, backward, forward, isFocused]);

	return [
		{
			ref: playerRef,
			autoPlay: options.autoPlay
		},
		{
			toggleFullscreen,
			togglePlaying
		},
		{
			isTouched,
			isFocused,
			isPlaying,
			currentTime,
			duration,
			progress
		},
		{
			ref: progressBarRef
		}
	];
};
