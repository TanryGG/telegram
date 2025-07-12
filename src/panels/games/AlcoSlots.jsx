import { useEffect, useState, Fragment } from "react";
import {
	Panel,
	PanelHeader,
	ConfigProvider,
	SimpleCell,
	Link,
	Footer,
	Card,
	CardGrid,
	Avatar,
	FormItem,
	Input,
	FormStatus,
	HorizontalScroll,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon24DoneOutline,
	Icon56DiamondOutline,
} from "@vkontakte/icons";
const KeybordBets = ({ props }) => {
	return (
		<Fragment>
			<FormItem
				style={{
					padding: 0,
					margin: 0,
				}}
			>
				<div
					style={{
						display: "flex",
						width: "calc(100% - 40px)",
						marginRight: 20,
						marginLeft: 20,
						marginTop: 10,
					}}
				>
					<div
						className="button"
						style={{
							display: "flex",
							width: "calc(25% - 15px)",
							justifyContent: "center",
							alignItems: "center",
							background: "#ffc107",
							borderRadius: "var(--radius_button)",
							fontWeight: 600,
							fontSize: 20,
							padding: 5,
							marginRight: 5,
						}}
						onClick={() => props.changesumbybtn(1000000)}
					>
						+1KK
					</div>
					<div
						className="button"
						style={{
							display: "flex",
							width: "calc(25% - 15px)",
							justifyContent: "center",
							alignItems: "center",
							background: "#8bc34a",
							borderRadius: "var(--radius_button)",
							fontWeight: 600,
							fontSize: 20,
							padding: 5,
							marginRight: 5,
						}}
						onClick={() => props.changesumbybtn(10000000)}
					>
						+10KK
					</div>
					<div
						className="button"
						style={{
							display: "flex",
							width: "calc(25% - 15px)",
							justifyContent: "center",
							alignItems: "center",
							background: "#03a9f4",
							borderRadius: "var(--radius_button)",
							fontWeight: 600,
							fontSize: 20,
							padding: 5,
							marginRight: 5,
						}}
						onClick={() => props.changesumbybtn(25000000)}
					>
						+25KK
					</div>
					<div
						className="button"
						style={{
							display: "flex",
							width: "calc(25% - 15px)",
							justifyContent: "center",
							alignItems: "center",
							background: "#e91e63",
							borderRadius: "var(--radius_button)",
							fontWeight: 600,
							fontSize: 20,
							padding: 5,
						}}
						onClick={() => props.changesumbybtn(100000000)}
					>
						+100KK
					</div>
				</div>
			</FormItem>
			<FormItem
				style={{
					margin: 0,
					padding: 0,
				}}
				status={props.errorInputGame.error === true ? "error" : null}
				bottom={
					props.errorInputGame.error === true ? props.errorInputGame.desc : null
				}
			>
				<div
					style={{
						position: "relative",
						height: 44,
						fontSize: 16,
						margin: 20,
						marginTop: 10,
						marginBottom: 5,
					}}
				>
					<Input
						style={{
							border: props.errorInputGame.error
								? "1px solid var(--field_error_border)"
								: null,
						}}
						value={props.number_format(props.gameSum, false)}
						onChange={(value) =>
							props.changesumgame(value.currentTarget.value.replace(/ /gi, ""))
						}
					/>
					<div
						style={{
							position: "absolute",
							display: "flex",
							top: 7,
							right: 4,
							zIndex: 2,
						}}
					>
						<div
							className="button"
							style={{
								background: "var(--color_background_buttons_dark)",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: "var(--radius_button)",
								padding: 10,
								paddingTop: 5,
								paddingBottom: 5,
								marginRight: 5,
							}}
							onClick={() => props.changesumbybtn("/2")}
						>
							/2
						</div>
						<div
							className="button"
							style={{
								background: "var(--color_background_buttons_dark)",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: "var(--radius_button)",
								padding: 10,
								paddingTop: 5,
								paddingBottom: 5,
								marginRight: 5,
							}}
							onClick={() => props.changesumbybtn("*2")}
						>
							x2
						</div>
					</div>
				</div>
			</FormItem>
			<div
				style={{
					marginLeft: 20,
					marginRight: 20,
					background: "var(--field_background)",
					padding: 10,
					borderRadius: "var(--radius_button)",
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				<div
					style={{
						fontSize: 17,
						marginLeft: 10,
						marginBottom: 5,
					}}
				>
					Стол ставок
				</div>
				<div
					style={{
						display: "flex",
						width: "100%",
						fontWeight: 600,
						fontSize: 18,
					}}
				>
					<div
						className="button"
						data-bet="1x1"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						style={{
							background: "#f9a825",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
							marginRight: 10,
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_0"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x1.3</div>
					</div>
					<div
						data-bet="2x1"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						className="button"
						style={{
							background: "#00bcd4",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
							marginRight: 10,
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_1"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x1.3</div>
					</div>
					<div
						data-bet="3x1"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						className="button"
						style={{
							background: "#8d6e63",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_2"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x1.3</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						width: "100%",
						fontWeight: 600,
						fontSize: 18,
						marginTop: 10,
					}}
				>
					<div
						className="button"
						data-bet="1x2"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						style={{
							background: "#f9a825",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
							marginRight: 10,
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_0"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_0"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x3.5</div>
					</div>
					<div
						data-bet="2x2"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						className="button"
						style={{
							background: "#00bcd4",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
							marginRight: 10,
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_1"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_1"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x3.5</div>
					</div>
					<div
						data-bet="3x2"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						className="button"
						style={{
							background: "#8d6e63",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_2"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_2"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x3.5</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						width: "100%",
						fontWeight: 600,
						fontSize: 18,
						marginTop: 10,
					}}
				>
					<div
						className="button"
						data-bet="1x3"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						style={{
							background: "#f9a825",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
							marginRight: 10,
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_0"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_0"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_0"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x20</div>
					</div>
					<div
						data-bet="2x3"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						className="button"
						style={{
							background: "#00bcd4",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
							marginRight: 10,
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_1"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_1"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_1"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x20</div>
					</div>
					<div
						data-bet="3x3"
						onClick={(value) => props.bet(value.currentTarget.dataset.bet)}
						className="button"
						style={{
							background: "#8d6e63",
							width: "calc((100% / 3))",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: "18px 0",
						}}
					>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_2"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_2"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<svg
							viewBox="0 0 18 19"
							width="24"
							height="24"
							style={{
								display: "block",
							}}
						>
							<use
								xlinkHref="#alco_2"
								style={{
									fill: "currentcolor",
								}}
							></use>
						</svg>
						<div className="coef">x20</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
const m = function (t) {
	switch (t) {
		case 1:
			return 20;
		case 0:
			return 100;
		case 2:
			return 180;
	}
};
const Line1 = (props) => {
	const [getRes, setRes] = useState([]);
	useEffect(() => {
		var res = [];
		for (var i = 0; i < 35; i++) {
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#f9a825",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_0"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#00bcd4",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_1"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#8d6e63",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_2"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
		}
		// res.sort(() => Math.random() - 0.5);
		setRes(res);
	}, [props.gameData.time]);
	return getRes;
};
const Line2 = (props) => {
	const [getRes, setRes] = useState([]);
	useEffect(() => {
		var res = [];
		for (var i = 0; i < 35; i++) {
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#f9a825",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_0"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#00bcd4",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_1"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#8d6e63",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_2"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
		}
		// res.sort(() => Math.random() - 0.5);
		setRes(res);
	}, [props.gameData.time]);
	return getRes;
};
const Line3 = (props) => {
	const [getRes, setRes] = useState([]);
	useEffect(() => {
		var res = [];
		for (var i = 0; i < 35; i++) {
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#f9a825",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_0"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#00bcd4",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_1"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
			res.push(
				<div
					style={{
						display: "block",
						width: 70,
						height: 70,
						margin: "5px 0",
						color: "#8d6e63",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<svg
						viewBox="0 0 18 19"
						width="68"
						height="68"
						style={{
							display: "block",
						}}
					>
						<use
							xlinkHref="#alco_2"
							style={{
								fill: "currentcolor",
							}}
						></use>
					</svg>
				</div>
			);
		}
		// res.sort(() => Math.random() - 0.5);
		setRes(res);
	}, [props.gameData.time]);
	return getRes;
};
const AlcoSlots = (props) => {
	return (
		<Panel id={props.id}>
			<PanelHeader
				separator={false}
				before={
					<Icon28ChevronBack
						onClick={() => window.history.back()}
						style={{ paddingLeft: 10 }}
						fill="#fff"
					/>
				}
			>
				AlcoSlots
			</PanelHeader>
			<CardGrid size="l" style={{ padding: 0, paddingTop: 10 }}>
				<Card
					style={{
						background: "var(--color_background_buttons)",
						borderRadius: "var(--radius_button)",
						padding: 5,
						overflow: "hidden",
						margin: 20,
						marginTop: 0,
						marginBottom: 0,
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: 20,
							fontWeight: "600",
						}}
					>
						<span>{props.number_format(props.userData.coins)}</span>
						<Icon28CoinsOutline
							className="vkIcon"
							width={24}
							height={24}
							style={{ paddingLeft: 0 }}
						/>
					</div>
				</Card>
			</CardGrid>
			{props.loading === 0 && props.gameData?.game === props.id && (
				<Fragment>
					<div
						style={{
							margin: 20,
							marginTop: 10,
							marginBottom: 0,
							background: "var(--color_background_buttons)",
							padding: 10,
							borderRadius: "var(--radius_button)",
						}}
					>
						<div
							style={{
								marginBottom: 5,
								marginLeft: 6,
								marginTop: 4,
								color: "white",
								fontSize: 11,
							}}
						>
							ИСТОРИЯ ИГР
						</div>
						<HorizontalScroll>
							<div style={{ display: "flex", overflow: "hidden" }}>
								{props.gameData.history.map((x) => {
									return (
										<div
											onClick={() =>
												props.openHashCheck({
													num: x.result.win.toString(),
													md5: x.result.md5,
													hash: x.hash,
												})
											}
											style={{
												borderRadius: 12,
												marginRight: 8,
												background: "var(--color_background_buttons_dark)",
												width: 65,
												height: 50,
												whiteSpace: "nowrap",
												padding: 5,
											}}
										>
											<div
												style={{
													width: "100%",
													height: "100%",
													fontSize: 21,
													textAlign: "center",
													lineHeight: "50px",
													fontWeight: 200,
													verticalAlign: "middle",
													color: "#fff",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
												}}
											>
												<svg
													viewBox="0 0 18 19"
													width="16"
													height="24"
													style={{
														display: "inline-block",
													}}
												>
													<use
														xlinkHref={`#alco_${x.result.win[0]}`}
														style={{
															fill: "currentcolor",
															color:
																x.result?.win[0] === 2
																	? "#8d6e63"
																	: x.result?.win[0] === 1
																	? "#00bcd4"
																	: x.result?.win[0] === 0
																	? "#f9a825"
																	: "white",
														}}
													></use>
												</svg>
												<svg
													viewBox="0 0 18 19"
													width="16"
													height="16"
													style={{
														display: "inline-block",
													}}
												>
													<use
														xlinkHref={`#alco_${x.result.win[1]}`}
														style={{
															fill: "currentcolor",
															color:
																x.result.win[1] === 2
																	? "#8d6e63"
																	: x.result.win[1] === 1
																	? "#00bcd4"
																	: x.result.win[1] === 0
																	? "#f9a825"
																	: "white",
														}}
													></use>
												</svg>
												<svg
													viewBox="0 0 18 19"
													width="16"
													height="16"
													style={{
														display: "inline-block",
													}}
												>
													<use
														xlinkHref={`#alco_${x.result.win[2]}`}
														style={{
															fill: "currentcolor",
															color:
																x.result.win[2] === 2
																	? "#8d6e63"
																	: x.result.win[2] === 1
																	? "#00bcd4"
																	: x.result.win[2] === 0
																	? "#f9a825"
																	: "white",
														}}
													></use>
												</svg>
											</div>
										</div>
									);
								})}
							</div>
						</HorizontalScroll>
					</div>
					<div
						style={{
							width: "calc(100% - 40px)",
							borderRadius: "var(--radius_button)",
							background: "var(--color_background_buttons)",
							color: "var(--bw_color_text)",
							textAlign: "center",
							position: "relative",
							marginLeft: 20,
							marginRight: 20,
							marginTop: 10,
						}}
					>
						{props.gameData.state <= 1 && (
							<div
								style={{
									padding: "40px 10px",
									textAlign: "center",
								}}
							>
								{props.gameData.state === 0 && (
									<>
										<div
											style={{
												display: "inline-block",
												animation: "slotsDiamondAnim 2s linear infinite",
											}}
										>
											<Icon56DiamondOutline />
										</div>
										<div
											style={{
												fontSize: 27,
												fontWeight: 300,
												color: "var(--bw_color_text)",
											}}
										>
											Время ставок!
										</div>
									</>
								)}
								{props.gameData.state === 1 && (
									<div
										style={{
											padding: "20px 0",
											color: "var(--bw_color_text)",
											fontSize: 70,
											fontWeight: 500,
										}}
									>
										{props.gameData.time}
									</div>
								)}
							</div>
						)}
						{props.gameData.state === 2 && (
							<div
								style={{
									padding: "10px 5px",
									display: "flex",
									justifyContent: "center",
								}}
							>
								<div
									className="gameAlcoSlots gameContent table lines line"
									style={{
										margin: "0 5px",
										width: "33.33333%",
										height: 200,
										maxWidth: 150,
										background: "var(--color_background_buttons_dark)",
										borderRadius: 12,
										overflow: "hidden",
										position: "relative",
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											flexDirection: "column",
											...(props.gameData.time >= -2
												? { animation: "slotsScrollAnim 2s linear infinite" }
												: { animation: "slotsScrollAnim2 3s ease-out both" }),
											marginTop: m(props.gameData.result.win[0]),
										}}
									>
										<Line1 {...props} />
									</div>
								</div>
								<div
									className="gameAlcoSlots gameContent table lines line"
									style={{
										margin: "0 5px",
										width: "33.33333%",
										height: 200,
										maxWidth: 150,
										background: "var(--color_background_buttons_dark)",
										borderRadius: 12,
										overflow: "hidden",
										position: "relative",
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											flexDirection: "column",
											...(props.gameData.time >= -2
												? { animation: "slotsScrollAnim 2s linear infinite" }
												: { animation: "slotsScrollAnim2 4s ease-out both" }),
											marginTop: m(props.gameData.result.win[1]),
										}}
									>
										<Line2 {...props} />
									</div>
								</div>
								<div
									className="gameAlcoSlots gameContent table lines line"
									style={{
										margin: "0 5px",
										width: "33.33333%",
										height: 200,
										maxWidth: 150,
										background: "var(--color_background_buttons_dark)",
										borderRadius: 12,
										overflow: "hidden",
										position: "relative",
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											flexDirection: "column",
											...(props.gameData.time >= -2
												? { animation: "slotsScrollAnim 2s linear infinite" }
												: { animation: "slotsScrollAnim2 5s ease-out both" }),
											marginTop: m(props.gameData.result.win[2]),
										}}
									>
										<Line3 {...props} />
									</div>
								</div>
								<div>
									<div
										style={{
											position: "absolute",
											top: "calc(50% - 6px)",
											left: 0,
											border: "7px solid transparent",
											borderLeftColor: "#fff",
											animation: "slotsLineAnimLeft 2s linear infinite",
											zIndex: 5,
										}}
									></div>
									<div
										style={{
											position: "absolute",
											top: "50%",
											left: 0,
											width: "100%",
											height: 2,
											background: "white",
										}}
									></div>
									<div
										style={{
											position: "absolute",
											top: "calc(50% - 6px)",
											right: 0,
											border: "7px solid transparent",
											borderRightColor: "#fff",
											animation: "slotsLineAnimRight 2s linear infinite",
											zIndex: 5,
										}}
									></div>
								</div>
							</div>
						)}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							style={{ position: "absolute", width: 0, height: 0 }}
							aria-hidden={true}
							id="__SVG_SPRITE_NODE__"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="alco_2"
								viewBox="0 0 306.98 360"
							>
								<g id="Слой_2" data-name="Слой 2">
									<g id="Слой_1-2" data-name="Слой 1">
										<path
											fill="currentColor"
											d="M297,11.08A36.17,36.17,0,0,0,271,0H36A36,36,0,0,0,0,37.5L11.55,314a47.89,47.89,0,0,0,48,46h188a47.89,47.89,0,0,0,48-46L307,37.5a36.21,36.21,0,0,0-10-26.42M271.45,313a24,24,0,0,1-24,23h-188a24,24,0,0,1-24-23L24,36.5A12,12,0,0,1,36,24H271a12,12,0,0,1,12,12.5Z"
										></path>
										<path
											fill="currentColor"
											d="M253.62,99.92c-8.35-4-24.2-9.4-48.33-9.4-14.14,0-31.13,1.86-51.13,7C132.56,103,114.79,105,100.37,105c-16,0-27.84-2.47-36.22-5.33a12.22,12.22,0,0,0-3.9-.65A12,12,0,0,0,48.31,111.5l6.9,188.94A12,12,0,0,0,67.2,312H239.88a12,12,0,0,0,12-11.46l8.56-189.25a12,12,0,0,0-6.81-11.37M228.41,288H78.77L72.88,126.68A152.58,152.58,0,0,0,100.37,129c18.16,0,38.27-2.79,59.75-8.29,16.16-4.14,31.36-6.23,45.17-6.23s24,2.09,30.78,4.25Z"
										></path>
									</g>
								</g>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="alco_1"
								viewBox="0 0 360 486.33"
							>
								<g id="Слой_2" data-name="Слой 2">
									<g id="Слой_1-2" data-name="Слой 1">
										<path
											fill="currentColor"
											d="M141.05,272.15a23.84,23.84,0,0,0,36.63,0L237,200.93a11.91,11.91,0,0,0-9-19.55,14,14,0,0,0-1.57.09,341.19,341.19,0,0,1-41.14,2.73,205.24,205.24,0,0,1-25.91-1.52,205.36,205.36,0,0,0-26.06-1.58,279.67,279.67,0,0,0-41.86,3.32,11.91,11.91,0,0,0-7.33,19.41Zm-7.74-67.21a181.75,181.75,0,0,1,23,1.39A230.25,230.25,0,0,0,185.28,208q7.33,0,15.11-.38l-41,49.22L116.6,205.56c5.72-.41,11.34-.62,16.71-.62"
										></path>
										<path
											fill="currentColor"
											d="M355.28,2.29c-5.14-3.9-12.56-2.61-16.73,2.31L330,14.71a47.64,47.64,0,0,0-29.4-4.56c-21.59,3.52-37.93,22-39.76,43.77-1.2,14.31,5.54,23,12.13,28.16l-39.49,46.64H36.89c-14.15,0-27.47,7.79-33.47,20.62a35.42,35.42,0,0,0,4.92,38l96.08,115.3a71.32,71.32,0,0,0,43,24.74v56a23.84,23.84,0,0,1-11.95,20.64,47.22,47.22,0,0,0-5.92,4l-44,35.2c-7.13,5.7-11,14.86-9.2,23.82a23.85,23.85,0,0,0,23.39,19.2h118.3c9.13,0,17.87-4.74,22.06-12.85a23.84,23.84,0,0,0-6.27-29.61l-44.71-35.76a36.16,36.16,0,0,0-5.38-3.74,23.86,23.86,0,0,1-12.48-20.94v-56a71.27,71.27,0,0,0,43-24.74l95.4-114.47c9.06-10.87,11.6-26.1,5.59-38.91a35.45,35.45,0,0,0-32.38-20.57H264.71L290.38,98.4a27.32,27.32,0,0,0,18,6.48,47.61,47.61,0,0,0,39.46-74.35l9.35-11a11.93,11.93,0,0,0-1.9-17.21m-144.8,460.2H108.26a3,3,0,0,1-1.86-5.31l38.08-30.46a23.85,23.85,0,0,1,29.78,0l38.08,30.46a3,3,0,0,1-1.86,5.31m81.6-290.38L196,287.41a47.68,47.68,0,0,1-73.26,0L26.66,172.11a11.92,11.92,0,0,1,9.16-19.55h247.1a11.92,11.92,0,0,1,9.16,19.55M326.16,69.88c-25,22.44-20.76,4.93-27.19-.09-7.66-6-21.45-4.87-10.18-24.54,4.06-7.09,11.53-11.93,19.7-11.89a23.83,23.83,0,0,1,23.72,23.71,17.33,17.33,0,0,1-6,12.81"
										></path>
									</g>
								</g>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								id="alco_0"
								viewBox="0 0 162.49 380"
							>
								<g id="Слой_2" data-name="Слой 2">
									<g id="Слой_1-2" data-name="Слой 1">
										<path
											fill="currentColor"
											d="M161.86,155.24a67.26,67.26,0,0,0-.25-20L143.49,17.46A20.58,20.58,0,0,0,123.14,0H39.35A20.58,20.58,0,0,0,19,17.46L.88,135.25a66.91,66.91,0,0,0-.24,20C6,191.42,35.35,219.47,71,224.06V313.8a10.29,10.29,0,0,1-6.47,9.56l-41.75,16.7c-8.21,3.28-13.9,11.27-13.53,20.12A20.6,20.6,0,0,0,29.78,380H132.06c8.85,0,17.1-5.31,20-13.65a20.59,20.59,0,0,0-11.74-26.05L98,323.36a10.29,10.29,0,0,1-6.47-9.56V224.06c35.6-4.59,65-32.64,70.32-68.82M120.31,354.45a2.57,2.57,0,0,1-1,5H43.14a2.57,2.57,0,0,1-1-5l35.24-14.09a10.22,10.22,0,0,1,7.65,0ZM81.25,205.87A62.93,62.93,0,0,1,19.3,152.49a48.41,48.41,0,0,1,.22-14.37l17-110.52A10.29,10.29,0,0,1,46.7,18.87h69.09A10.29,10.29,0,0,1,126,27.6l17,110.52a48.4,48.4,0,0,1,.22,14.37,62.93,62.93,0,0,1-61.94,53.38"
										></path>
										<path
											fill="currentColor"
											d="M127.81,135.19,121.63,99a5.16,5.16,0,0,0-5-4.31A4.92,4.92,0,0,0,115,95a30.28,30.28,0,0,1-9.86,1.44c-5.8,0-13.59-1.15-23.92-4.61s-18-4.57-23.82-4.57a32.17,32.17,0,0,0-9,1.15,10.21,10.21,0,0,0-7.1,8.11l-6.61,38.72a39.89,39.89,0,0,0,.41,24.22,48.91,48.91,0,0,0,92.31,0,39.89,39.89,0,0,0,.41-24.22M108,152.61a28.32,28.32,0,0,1-53.45,0,19.41,19.41,0,0,1-.06-11.7,21.18,21.18,0,0,0,.52-2.26l5.24-30.71a65.14,65.14,0,0,1,14.49,3.37c10.69,3.57,20.47,5.47,29.1,5.65l3.7,21.69a21.18,21.18,0,0,0,.52,2.26,19.41,19.41,0,0,1-.06,11.7"
										></path>
									</g>
								</g>
							</svg>
						</svg>
					</div>
					{props.gameData.state <= 1 && <KeybordBets props={props} />}
					{props.gameData.time <= -9 &&
						props.gameData.bets.filter((x) => x.user === props.fetchedUser.id)
							.length > 0 && (
							<Fragment>
								<div
									style={{
										marginLeft: 20,
										marginRight: 20,
										padding: 15,
										background: "var(--color_background_buttons)",
										borderRadius: "var(--radius_button)",
										marginTop: 10,
									}}
								>
									<div
										style={{
											fontSize: 18,
											fontWeight: 200,
											display: "flex",
											justifyContent: "flex-start",
											alignItems: "center",
										}}
									>
										Ваши ставки:
										<div
											style={{
												fontWeight: "300",
												marginLeft: 5,
											}}
										>
											{props.number_format(props.getSumBets, false)}
										</div>
									</div>
									<div
										style={{
											fontSize: 18,
											fontWeight: 200,
											display: "flex",
											justifyContent: "flex-start",
											alignItems: "center",
										}}
									>
										Выигрыш:
										<div
											style={{
												fontWeight: "300",
												marginLeft: 5,
											}}
										>
											{props.number_format(props.getWinnerSum, false)}
										</div>
									</div>
									<div
										style={{
											fontSize: 18,
											fontWeight: 200,
											display: "flex",
											justifyContent: "flex-start",
											alignItems: "center",
										}}
									>
										Итого:
										<div
											style={{
												color:
													props.getTotalSum.str === "-"
														? "#ef5350"
														: props.getTotalSum.str === "+"
														? "#66bb6a"
														: "white",
												fontWeight: "300",
												marginLeft: 5,
											}}
										>
											{props.getTotalSum.str +
												props.number_format(props.getTotalSum.num, false)}
										</div>
									</div>
								</div>
							</Fragment>
						)}
					{props.gameData.bets.map((user) => {
						return (
							<SimpleCell
								style={{
									marginLeft: 5,
									marginRight: 10,
									color: "white",
									marginTop: 0,
								}}
								disabled
								before={
									<Link
										style={{
											borderRadius: "25%",
											cursor: "default",
											marginRight: 7,
										}}
										hasHover={false}
										href={"https://vk.com/id" + user.user}
										target="_blank"
									>
										<Avatar
											style={{ borderRadius: "25%" }}
											size={42}
											src={user.photo}
										/>
									</Link>
								}
								after={
									<div
										style={{
											color:
												user.type === 0
													? "#2196f3"
													: user.type === 1
													? "#ffc107"
													: user.type === 2
													? "#ff5722"
													: user.type === 3
													? "#8bc34a"
													: "white",
											borderRadius: "var(--radius_button)",
											minWidth: 50,
											fontSize: 13,
											fontWeight: 500,
											padding: 5,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<div
											style={{
												background:
													2 ===
													Number(
														user.type
															.replace(/x1/i, "")
															.replace(/x2/i, "")
															.replace(/x3/i, "")
													) -
														1
														? "#8d6e63"
														: 1 ===
														  Number(
																user.type
																	.replace(/x1/i, "")
																	.replace(/x2/i, "")
																	.replace(/x3/i, "")
														  ) -
																1
														? "#00bcd4"
														: 0 ===
														  Number(
																user.type
																	.replace(/x1/i, "")
																	.replace(/x2/i, "")
																	.replace(/x3/i, "")
														  ) -
																1
														? "#f9a825"
														: "white",
												padding: 10,
												borderRadius: 12,
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											{(user.type.match(/.x1/i) ||
												user.type.match(/.x2/i) ||
												user.type.match(/.x3/i)) && (
												<div>
													<svg
														viewBox="0 0 18 19"
														width="24"
														height="24"
														style={{
															display: "inline-block",
														}}
													>
														<use
															xlinkHref={`#alco_${
																Number(
																	user.type
																		.replace(/x1/i, "")
																		.replace(/x2/i, "")
																		.replace(/x3/i, "")
																) - 1
															}`}
															style={{
																fill: "currentcolor",
															}}
														></use>
													</svg>
												</div>
											)}
											{(user.type.match(/.x2/i) || user.type.match(/.x3/i)) && (
												<div>
													<svg
														viewBox="0 0 18 19"
														width="24"
														height="24"
														style={{
															display: "inline-block",
														}}
													>
														<use
															xlinkHref={`#alco_${
																Number(
																	user.type
																		.replace(/x2/i, "")
																		.replace(/x3/i, "")
																) - 1
															}`}
															style={{
																fill: "currentcolor",
															}}
														></use>
													</svg>
												</div>
											)}
											{user.type.match(/.x3/i) && (
												<div>
													<svg
														viewBox="0 0 18 19"
														width="24"
														height="24"
														style={{
															display: "inline-block",
														}}
													>
														<use
															xlinkHref={`#alco_${
																Number(user.type.replace(/x3/i, "")) - 1
															}`}
															style={{
																fill: "currentcolor",
															}}
														></use>
													</svg>
												</div>
											)}
										</div>
									</div>
								}
								subtitle={
									<div
										style={{
											color:
												user.win === 1
													? "#1AB095"
													: user.win === 2
													? "#E74C3C"
													: "",
										}}
									>
										<div>
											{user.win === 1 ? "+" : user.win === 2 ? "-" : ""}
											{props.number_format(user.sum)}
											<Icon28CoinsOutline
												width={16}
												height={16}
												className="vkIcon"
											/>
										</div>
									</div>
								}
							>
								<div
									style={{
										color: user.color ? user.color : "white",
									}}
								>
									{user.nick ? user.nick : "@" + user.user}
								</div>
							</SimpleCell>
						);
					})}
					{props.gameData.state <= 2 && props.gameData.time > -9 && (
						<Footer
							style={{ marginTop: 5, color: "GrayText", marginBottom: 10 }}
						>
							Hash: {props.gameData.hash}
						</Footer>
					)}
					{props.gameData.state === 2 && props.gameData.time <= -9 && (
						<Fragment>
							<Footer style={{ margin: 0, marginTop: 5, color: "GrayText" }}>
								Hash: {props.gameData.hash}
							</Footer>
							<Footer
								style={{ marginTop: 5, color: "GrayText", marginBottom: 10 }}
							>
								Md5: {props.gameData.result.md5}
							</Footer>
						</Fragment>
					)}
				</Fragment>
			)}
		</Panel>
	);
};
export default AlcoSlots;
