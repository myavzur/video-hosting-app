import React from "react";

import styles from "./HandsUpSoft.module.scss";

const HandsUpSoft: React.FC = () => {
	return (
		<svg
			viewBox="0 0 88 82"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={styles.svg}
		>
			<g className={styles.svg__background}>
				<path d="M67.7224 46.834L39.9705 23.3304C38.3511 21.9588 35.5076 22.6543 33.6194 24.8838L16.7455 44.8077C14.8574 47.0371 14.6395 49.9563 16.2589 51.3278L44.0109 74.8315C45.6303 76.203 48.4737 75.5075 50.3619 73.278L67.2358 53.3541C69.124 51.1247 69.3418 48.2055 67.7224 46.834Z" />
				<path d="M67.7709 31.2188L23.6441 11.8249C21.0692 10.6932 18.0267 11.9488 16.8486 14.6294L6.31994 38.585C5.1418 41.2656 6.27413 44.3561 8.84905 45.4878L52.9759 64.8818C55.5508 66.0135 58.5932 64.7578 59.7714 62.0772L70.3 38.1216C71.4781 35.441 70.3458 32.3505 67.7709 31.2188Z" />
				<path d="M43.5043 64.9326L82.0151 43.1664C84.468 41.7801 85.3252 38.6549 83.9299 36.1861L71.4601 14.1234C70.0648 11.6546 66.9452 10.7771 64.4923 12.1635L25.9816 33.9297C23.5287 35.316 22.6714 38.4412 24.0668 40.91L36.5365 62.9727C37.9319 65.4415 41.0515 66.3189 43.5043 64.9326Z" />
			</g>

			<g className={styles["svg__shape-shadow"]}>
				<path d="M72.1005 5.60559C70.8902 2.70107 67.3299 1.62317 64.7117 3.3686L45.7732 15.9943C44.0938 17.1139 41.9058 17.1139 40.2263 15.9943L21.2867 3.36853C18.6684 1.62315 15.1081 2.70117 13.8979 5.60577L1.34013 35.7443C0.534846 37.677 1.01901 39.9068 2.55332 41.3314L39.5976 75.7286C41.516 77.5099 44.4836 77.5099 46.402 75.7287L83.4466 41.3315C84.9809 39.9068 85.4651 37.677 84.6597 35.7442L72.1005 5.60559ZM9.29581 39.8647C7.76156 38.4399 7.27756 36.21 8.08307 34.2774L16.4805 14.1291C17.6911 11.2246 21.2514 10.1469 23.8695 11.8925L40.2263 22.7984C41.9058 23.9182 44.0939 23.9183 45.7735 22.7986L62.1298 11.8945C64.7478 10.1492 68.3079 11.2269 69.5185 14.1312L77.9176 34.2823C78.7232 36.2151 78.2391 38.4452 76.7045 39.87L46.4022 68.0054C44.4837 69.7867 41.516 69.7866 39.5977 68.0051L9.29581 39.8647Z" />
				<path d="M73.1005 6.60559C71.8902 3.70107 68.3299 2.62317 65.7117 4.3686L46.7732 16.9943C45.0938 18.1139 42.9058 18.1139 41.2263 16.9943L22.2867 4.36853C19.6684 2.62315 16.1081 3.70117 14.8979 6.60577L2.34013 36.7443C1.53485 38.677 2.01901 40.9068 3.55332 42.3314L40.5976 76.7286C42.516 78.5099 45.4836 78.5099 47.402 76.7287L84.4466 42.3315C85.9809 40.9068 86.4651 38.677 85.6597 36.7442L73.1005 6.60559ZM10.2958 40.8647C8.76156 39.4399 8.27756 37.21 9.08307 35.2774L17.4805 15.1291C18.6911 12.2246 22.2514 11.1469 24.8695 12.8925L41.2263 23.7984C42.9058 24.9182 45.0939 24.9183 46.7735 23.7986L63.1298 12.8945C65.7478 11.1492 69.3079 12.2269 70.5185 15.1312L78.9176 35.2823C79.7232 37.2151 79.2391 39.4452 77.7045 40.87L47.4022 69.0054C45.4837 70.7867 42.516 70.7866 40.5977 69.0051L10.2958 40.8647Z" />
			</g>

			<g className={styles["svg__shape"]}>
				<path d="M74.1005 8.16199C72.8902 5.25747 69.3299 4.17957 66.7117 5.925L47.7732 18.5506C46.0938 19.6703 43.9058 19.6703 42.2263 18.5507L23.2867 5.92493C20.6684 4.17955 17.1081 5.25757 15.8979 8.16217L3.34013 38.3007C2.53485 40.2334 3.01901 42.4632 4.55332 43.8878L41.5976 78.285C43.516 80.0663 46.4836 80.0663 48.402 78.285L85.4466 43.8879C86.9809 42.4632 87.4651 40.2334 86.6597 38.3006L74.1005 8.16199ZM11.2958 42.4211C9.76156 40.9963 9.27756 38.7664 10.083 36.8338L18.4805 16.6855C19.6911 13.781 23.2514 12.7033 25.8695 14.4489L42.2263 25.3548C43.9058 26.4746 46.0939 26.4747 47.7735 25.355L64.1298 14.4509C66.7478 12.7056 70.3079 13.7833 71.5185 16.6876L79.9176 36.8387C80.7232 38.7715 80.2391 41.0016 78.7045 42.4264L48.4022 70.5618C46.4837 72.3431 43.516 72.343 41.5977 70.5615L11.2958 42.4211Z" />
				<path d="M50.2118 36.4914C49.3374 36.6735 49.1222 37.8234 49.8716 38.3094L57.1075 43.0025C57.4663 43.2353 57.9334 43.2141 58.2696 42.9498L69.0026 34.5146C69.8335 33.8616 69.2154 32.5339 68.1808 32.7494L50.2118 36.4914Z" />
				<path d="M21.8176 32.7493C20.783 32.5339 20.1649 33.8616 20.9959 34.5146L31.7303 42.9499C32.0665 43.2141 32.5335 43.2353 32.8923 43.0026L40.1289 38.3094C40.8783 37.8234 40.6631 36.6735 39.7887 36.4914L21.8176 32.7493Z" />
				<path d="M42.1539 51.7262C43.5945 53.712 46.5542 53.7119 47.9946 51.726C49.7246 49.3409 48.0206 46 45.0742 46C42.1276 46 40.4237 49.3411 42.1539 51.7262Z" />
			</g>
		</svg>
	);
};

export default HandsUpSoft;