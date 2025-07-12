import { useEffect, useState, Fragment, useRef } from "react";
import {
	Panel,
	PanelHeader,
	ConfigProvider,
	Card,
	CardGrid,
	Footer,
	SimpleCell,
	Avatar,
	Link,
	FormItem,
	Input,
	FormStatus,
	HorizontalScroll,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon56RecentOutline,
	Icon24DoneOutline,
} from "@vkontakte/icons";
const KeybordBets = (props) => {
	const [select, setSelect] = useState(0);
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
								: "1px solid graytext",
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
						data-bet="0"
						onClick={(value) =>
							setSelect(Number(value.currentTarget.dataset.bet))
						}
						style={{
							background: select === 0 ? "#2196f3" : "rgba(0,0,0,.3)",
							color: select === 0 ? "white" : "#2196f3",
							width: "calc((100% / 4) - 30px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
							marginRight: 10,
						}}
					>
						x2
					</div>
					<div
						data-bet="1"
						onClick={(value) =>
							setSelect(Number(value.currentTarget.dataset.bet))
						}
						className="button"
						style={{
							background: select === 1 ? "#ffc107" : "rgba(0,0,0,.3)",
							color: select === 1 ? "white" : "#ffc107",
							width: "calc((100% / 4) - 30px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
							marginRight: 10,
						}}
					>
						x3
					</div>
					<div
						data-bet="2"
						onClick={(value) =>
							setSelect(Number(value.currentTarget.dataset.bet))
						}
						className="button"
						style={{
							background: select === 2 ? "#ff5722" : "rgba(0,0,0,.3)",
							color: select === 2 ? "white" : "#ff5722",
							width: "calc((100% / 4) - 30px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
							marginRight: 10,
						}}
					>
						x5
					</div>
					<div
						data-bet="3"
						onClick={(value) =>
							setSelect(Number(value.currentTarget.dataset.bet))
						}
						className="button"
						style={{
							background: select === 3 ? "#8bc34a" : "rgba(0,0,0,.3)",
							color: select === 3 ? "white" : "#8bc34a",
							width: "calc((100% / 4) - 30px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
						}}
					>
						x50
					</div>
				</div>
				<div
					onClick={() => props.bet(select)}
					className="button"
					style={{
						background: "#4986cc",
						width: "calc(100% - 20px)",
						borderRadius: "var(--radius_button)",
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: 10,
						fontSize: 17,
						fontWeight: 500,
						marginTop: 10,
					}}
				>
					<Icon24DoneOutline style={{ marginRight: 5 }} />
					Поставить
				</div>
			</div>
		</Fragment>
	);
};
import classes from "./css/double.module.css";
import doublePointer from "./img/pointer.svg";
import doubleWheel from "./img/wheel.svg";
const DoubleWheel = ({ e, children }) => {
	const getDeg = [
		0, 6.2, 13.4, 20, 27, 34, 40, 47, 53, 60, 65.7, 73, 80, 86, 93, 100, 106,
		113, 120, 126, 133, 139, 145, 153, 159, 166, 173, 180, 186, 193, 199, 207,
		213, 220, 226, 233, 239, 246, 253, 260, 267, 274, 280, 287, 294, 300, 306,
		312, 319, 326, 332, 339, 345, 352,
	];
	return (
		<div className={classes.table}>
			<div className={classes.roulette}>
				<img className={classes.wheel} src={doubleWheel} alt="" />
				<img
					className={classes.pointer}
					src={doublePointer}
					alt=""
					style={{
						transform: `rotateZ(${
							e.gameData.time < 0
								? 150 + 360 * 10 + getDeg[e.gameData.result.win]
								: 0
						}deg)`,
						transition: `all ${e.gameData.time < 0 ? 12 : 0}s ease 0s`,
					}}
				/>
			</div>
			<div className={classes.state}>{children}</div>
			{e.gameData.state == 3 && e.gameData.time <= -13 && (
				<div
					style={{
						backgroundColor:
							e.gameData.result.num == 2
								? "#2695ed"
								: e.gameData.result.num == 3
								? "#edb81e"
								: e.gameData.result.num == 5
								? "#f65a27"
								: e.gameData.result.num == 50
								? "#85ae56"
								: "back",
						fontSize: 30,
						margin: 0,
						padding: 0,
						position: "absolute",
						top: "calc(50% - 30px)",
						left: "calc(50% - 30px)",
						width: 60,
						height: 60,
						borderRadius: "50%",
						opacity: 0.9,
						"-webkit-animation": "show-result-text 1s linear both",
						animation: "show-result-text 1s linear both",
						"-webkit-transform-origin": "50% 50%",
						transformOrigin: "50% 50%",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{e.gameData.result.num}
					</div>
				</div>
			)}
		</div>
	);
};

const Double2_0 = (props) => {
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
				Double
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
				<div
					style={{
						height: "100%",
						width: "100%",
					}}
				>
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
													num: `x${
														x.result.num === 0
															? 2
															: x.result.num === 1
															? 3
															: x.result.num === 2
															? 5
															: x.result.num === 3
															? 50
															: null
													}`,
													md5: x.result.md5,
													hash: x.hash,
												})
											}
											style={{
												background: "var(--color_background_buttons_dark)",
												display: "inline-block",
												borderRadius: "25%",
												marginRight: 8,
												minWidth: 42,
												minHeight: 42,
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<div
												style={{
													width: "50%",
													height: "50%",
													textAlign: "center",
													lineHeight: "42px",
													fontWeight: 200,
													verticalAlign: "middle",
													color: "#fff",
													borderRadius: "25%",
													background:
														x.result.num === 0
															? "#2196f3"
															: x.result.num === 1
															? "#ffc107"
															: x.result.num === 2
															? "#ff5722"
															: x.result.num === 3
															? "#8bc34a"
															: "white",
												}}
											></div>
										</div>
									);
								})}
							</div>
						</HorizontalScroll>
					</div>
					<div
						style={{
							background: "var(--color_background_buttons)",
							borderRadius: "var(--radius_button)",
							marginLeft: 20,
							marginRight: 20,
							marginTop: 10,
							maxHeight: 300,
							height: 300,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
								height: "100%",
								width: "100%",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									padding: 5,
									alignItems: "center",
									height: "100%",
									width: "100%",
								}}
							>
								{props.gameData.state >= 1 && (
									<DoubleWheel e={props}></DoubleWheel>
								)}
								{props.gameData.state === 1 && (
									<div
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											margin: "0 auto",
											color: "#1abc9c",
											fontSize: 50,
											fontWeight: 300,
											textAlign: "center",
										}}
									>
										{props.gameData.time}
									</div>
								)}
								{props.gameData.state === 0 && (
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											flexDirection: "column",
											color: "#1abc9c",
										}}
									>
										<div>
											<Icon56RecentOutline width={66} height={66} />
										</div>
										<div
											style={{
												fontSize: 24,
											}}
										>
											Ждём ставок...
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
					{props.gameData.bets.find((x) => x.user === props.fetchedUser.id) && (
						<FormStatus
							mode={
								props.gameData.bets.find((x) => x.user === props.fetchedUser.id)
									.win === 2
									? "error"
									: "default"
							}
							header={
								props.gameData.bets.find((x) => x.user === props.fetchedUser.id)
									.win === 2
									? "Вы проиграли"
									: props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
									  ).win === 1
									? "Ваш выигрыш"
									: "Ваша ставка"
							}
							style={{
								marginTop: 10,
								borderRadius: "var(--radius_button)",
								background:
									props.gameData.bets.find(
										(x) => x.user === props.fetchedUser.id
									).win === 2
										? "rgba(244, 67, 54, .2)"
										: props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
										  ).win === 1
										? "#009688"
										: "var(--color_background_buttons)",
								marginRight: 20,
								marginLeft: 20,
								position: "relative",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									color:
										props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
										).win === 2
											? "rgba(244, 67, 54, .6)"
											: "white",
									fontSize: 15,
								}}
							>
								{
									props.gameData.bets.find(
										(x) => x.user === props.fetchedUser.id
									).sum
								}
								<Icon28CoinsOutline
									width={17}
									height={17}
									style={{
										display: "inline-flex",
									}}
								/>
							</div>
							<div
								style={{
									position: "absolute",
									height: 30,
									textAlign: "center",
									lineHeight: "30px",
									right: "20px",
									top: "calc(50% - 15px)",
									fontSize: 24,
									fontWeight: 300,
									verticalAlign: "middle",
									color:
										props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
										).type === 0
											? "#2196f3"
											: props.gameData.bets.find(
													(x) => x.user === props.fetchedUser.id
											  ).type === 1
											? "#ffc107"
											: props.gameData.bets.find(
													(x) => x.user === props.fetchedUser.id
											  ).type === 2
											? "#ff5722"
											: props.gameData.bets.find(
													(x) => x.user === props.fetchedUser.id
											  ).type === 3
											? "#8bc34a"
											: "white",
								}}
							>
								{props.gameData.bets.find(
									(x) => x.user === props.fetchedUser.id
								).type === 0
									? "x2"
									: props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
									  ).type === 1
									? "x3"
									: props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
									  ).type === 2
									? "x5"
									: "x50"}
							</div>
						</FormStatus>
					)}
					{!props.gameData.bets.find((x) => x.user === props.fetchedUser.id) &&
						props.gameData.state <= 1 && <KeybordBets {...props} />}
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
											fontSize: 21,
											fontWeight: 500,
											padding: 5,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										{user.type === 0
											? "x2"
											: user.type === 1
											? "x3"
											: user.type === 2
											? "x5"
											: "x50"}
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
					{props.gameData.state >= 0 && (
						<Footer
							style={{ marginTop: 5, color: "GrayText", marginBottom: 10 }}
						>
							Hash: {props.gameData.hash}
						</Footer>
					)}
					{props.gameData.state === 2 && props.gameData.time <= -14 && (
						<Footer
							style={{ marginTop: 5, color: "GrayText", marginBottom: 10 }}
						>
							Md5: {props.gameData.result.md5}
						</Footer>
					)}
				</div>
			)}
		</Panel>
	);
};

export default Double2_0;
