import {
	Dispatch,
	LegacyRef,
	SetStateAction,
	useEffect,
	useRef,
	useState
} from "react";

interface UseOutsideParams {
	initialVisible?: boolean;
	onDisappear?: () => void;
}

type UseOutsideResult = [
	ref: LegacyRef<HTMLDivElement>,
	isVisible: boolean,
	setVisible: Dispatch<SetStateAction<boolean>>
];

export const useOutside = (params?: UseOutsideParams): UseOutsideResult => {
	const [isVisible, setVisible] = useState(params?.initialVisible || false);
	const ref = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setVisible(false);

			if (params?.onDisappear) {
				params.onDisappear();
			}
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return [ref, isVisible, setVisible];
};
