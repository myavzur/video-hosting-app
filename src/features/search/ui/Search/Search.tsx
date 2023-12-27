import { animated, useTransition } from "@react-spring/web";
import Link from "next/link";
import React from "react";
import { RiSearchEyeLine } from "react-icons/ri";

import { useOutside } from "@/shared/lib/hooks";

import { useSearch } from "../../lib/hooks/useSearch";

import styles from "./Search.module.scss";

const Search: React.FC = () => {
	const [ref, isVisible, setVisible] = useOutside({ initialVisible: true });
	const { handleSearch, term, termDebounced, response } = useSearch(500);

	const transition = useTransition(isVisible && termDebounced, {
		from: {
			transform: "translateY(-25px)",
			opacity: 0
		},
		enter: {
			transform: "translateY(0%)",
			opacity: 1
		},
		leave: {
			transform: "translateY(-25px)",
			opacity: 0
		}
	});

	let resultContent: null | React.ReactNode = null;

	if (response.isLoading) {
		resultContent = <h1>Loading...</h1>;
	}

	if (response.isSuccess && response.data?.length) {
		resultContent = response.data.map(video => (
			<div
				className={styles.search__result_item}
				key={video.id}
			>
				<Link href={`/videos/${video.id}`}>
					<a>{video.name}</a>
				</Link>
			</div>
		));
	}

	if (response.isSuccess && response.data?.length === 0) {
		resultContent = (
			<div>
				Videos by <span style={{ color: "#6C5ECF" }}> {term} </span> not found!
			</div>
		);
	}

	return (
		<div
			className={styles.search}
			ref={ref}
			onClick={() => setVisible(true)}
		>
			<label className={styles.search__input}>
				<input
					type="text"
					placeholder="everything will be fine today..."
					value={term}
					onChange={handleSearch}
				/>

				<RiSearchEyeLine
					height={10}
					width={10}
				/>
			</label>

			{transition((style, isVisible) => {
				return (
					isVisible && (
						<animated.div
							style={style}
							className={styles.search__result}
						>
							{resultContent}
						</animated.div>
					)
				);
			})}
		</div>
	);
};

export default Search;
