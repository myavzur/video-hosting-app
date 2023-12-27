export interface IPlayerElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void;
	mozRequestFullscreen?: () => void;
	webkitRequestFullscreen?: () => void;
}
