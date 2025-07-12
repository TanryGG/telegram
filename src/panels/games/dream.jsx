import { useState, useEffect, Fragment } from "react";
import {
	ConfigProvider,
	Panel,
	PanelHeader,
	CardGrid,
	Card,
	HorizontalScroll,
	FormItem,
	Input,
	Footer,
	SimpleCell,
	Link,
	Avatar,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon56RecentOutline,
} from "@vkontakte/icons";
const DreamWheel = ({ props }) => {
	return (
		<div
			style={{
				position: "relative",
				background: "var(--color_background_buttons)",
				borderRadius: 12,
				textAlign: "center",
				marginLeft: 20,
				marginRight: 20,
				marginTop: 10,
			}}
		>
			<div>
				<div
					style={{
						width: "100%",
						position: "relative",
						display: "inline-block",
						margin: "15px 0 20px",
						maxWidth: 380,
					}}
				>
					<div
						style={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginTop: "3.9%",
						}}
					>
						<img
							src={props.dreamWheel}
							style={{
								display: "block",
								width: "90%",
								height: "auto",
								transformOrigin: "50% 50%",
								...(props.gameData.state === 2
									? {
											transform:
												"rotateZ(" +
												(2520 - props.gameData.result.win * (360 / 54)) +
												"deg)",
											transition: "transform 10s cubic-bezier(0.4, 0, 0.2, 1)",
									  }
									: {
											transform: `rotateZ(0deg)`,
									  }),
							}}
						/>
					</div>
					<img
						src={props.dreamPoint}
						style={{
							display: "block",
							top: 0,
							left: 0,
							right: 0,
							position: "absolute",
							width: "5%",
							margin: "0 auto",
							height: "auto",
						}}
					/>
					{props.gameData.state === 1 && (
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								width: "20%",
								transform: "translate(-50%,-50%)",
								marginTop: "1.9%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<div
								style={{
									fontSize: 50,
									fontWeight: 500,
									marginBottom: 0,
									color: "#0072e5",
								}}
							>
								{props.gameData.time}
							</div>
						</div>
					)}
					{props.gameData.state === 2 && props.gameData.viewnum === 1 && (
						<div
							style={{
								background:
									props.gameData.result.num === 1
										? "#f3c025"
										: props.gameData.result.num === 2
										? "#0072e5"
										: props.gameData.result.num === 5
										? "#a65ecc"
										: props.gameData.result.num === 10
										? "#096"
										: props.gameData.result.num === 20
										? "#ff5722"
										: props.gameData.result.num === 40
										? "#e5004c"
										: /(.*)x(.*)/i.test(`${props.gameData.result.num}`)
										? "linear-gradient(30deg,#f3c025,#e5004c)"
										: "white",
								borderRadius: "50%",
								opacity: 0.9,
								animation: "show-result-text 1s ease-out both",
								position: "absolute",
								top: "40%",
								left: "40%",
								width: "20%",
								height: "22%",
								transform: "translate(-50%,-50%)",
								marginTop: "1.9%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									textAlign: "center",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<div
									style={{
										display: "contents",
										fontSize: 30,
										lineHeight: "30px",
										fontWeight: 200,
										color: "#fff",
									}}
								>
									{`${props.gameData.result.num}`.match(/x/i)
										? props.gameData.result.num
										: "x" + props.gameData.result.num}
								</div>
							</div>
						</div>
					)}
					{props.gameData.state === 0 && (
						<div
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								width: "20%",
								transform: "translate(-50%,-50%)",
								marginTop: "1.9%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Icon56RecentOutline fill="#f3c025" />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
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
						data-bet="1"
						onClick={(value) =>
							props.bet(Number(value.currentTarget.dataset.bet))
						}
						style={{
							background: "#f3c025",
							width: "calc((100% / 3) - 20px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
							marginRight: 10,
						}}
					>
						x1
					</div>
					<div
						data-bet="2"
						onClick={(value) =>
							props.bet(Number(value.currentTarget.dataset.bet))
						}
						className="button"
						style={{
							background: "#0072e5",
							width: "calc((100% / 3) - 20px)",
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
						data-bet="5"
						onClick={(value) =>
							props.bet(Number(value.currentTarget.dataset.bet))
						}
						className="button"
						style={{
							background: "#a65ecc",
							width: "calc((100% / 3) - 20px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
						}}
					>
						x5
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
						data-bet="10"
						onClick={(value) =>
							props.bet(Number(value.currentTarget.dataset.bet))
						}
						style={{
							background: "#096",
							width: "calc((100% / 3) - 20px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
							marginRight: 10,
						}}
					>
						x10
					</div>
					<div
						data-bet="20"
						onClick={(value) =>
							props.bet(Number(value.currentTarget.dataset.bet))
						}
						className="button"
						style={{
							background: "#ff5722",
							width: "calc((100% / 3) - 20px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
							marginRight: 10,
						}}
					>
						x20
					</div>
					<div
						data-bet="40"
						onClick={(value) =>
							props.bet(Number(value.currentTarget.dataset.bet))
						}
						className="button"
						style={{
							background: "#e5004c",
							width: "calc((100% / 3) - 20px)",
							borderRadius: "var(--radius_button)",
							position: "relative",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							padding: 10,
						}}
					>
						x40
					</div>
				</div>
			</div>
		</Fragment>
	);
};
const Dream = (props) => {
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
				Dream Catcher
			</PanelHeader>
			{props.loading === 0 && props.gameData?.game === props.id && (
				<Fragment>
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
								<span>{props.number_format(props.userData.coins, false)}</span>
								<Icon28CoinsOutline
									className="vkIcon"
									width={24}
									height={24}
									style={{ paddingLeft: 0 }}
								/>
							</div>
						</Card>
					</CardGrid>
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
													num: x.result.num,
													md5: x.result.md5,
													hash: x.hash,
												})
											}
											style={{
												background:
													x.result.num === 1
														? "#f3c025"
														: x.result.num === 2
														? "#0072e5"
														: x.result.num === 5
														? "#a65ecc"
														: x.result.num === 10
														? "#096"
														: x.result.num === 20
														? "#ff5722"
														: x.result.num === 40
														? "#e5004c"
														: /(.*)x(.*)/i.test(`${x.result.num}`)
														? "linear-gradient(30deg,#f3c025,#e5004c)"
														: "white",
												display: "inline-block",
												borderRadius: "50%",
												marginRight: 8,
												minWidth: 42,
												minHeight: 42,
											}}
										>
											<div
												style={{
													width: "100%",
													height: "100%",
													fontSize: x.result.num <= 5 ? 21 : 18,
													textAlign: "center",
													lineHeight: "42px",
													fontWeight: 200,
													verticalAlign: "middle",
													color: "#fff",
												}}
											>
												{/(.*)x(.*)/i.test(`${x.result.num}`)
													? `${x.result.num}`.toUpperCase()
													: "x" + x.result.num}
											</div>
										</div>
									);
								})}
							</div>
						</HorizontalScroll>
					</div>
					<DreamWheel props={props} />
					{props.gameData.state === 1 &&
						props.gameData.rbets.filter((x) => x.user === props.fetchedUser.id)
							.length > 0 && (
							<div
								style={{
									marginLeft: 20,
									marginRight: 20,
									background: "var(--color_background_buttons)",
									borderRadius: 12,
									marginTop: 10,
								}}
							>
								<div
									style={{
										fontSize: 15,
										marginLeft: 10,
										marginBottom: 10,
										fontWeight: 600,
										paddingTop: 10,
									}}
								>
									Ваши ставки
								</div>
								<HorizontalScroll>
									<div
										style={{
											fontSize: 21,
											fontWeight: 600,
											paddingBottom: 5,
											display: "flex",
										}}
									>
										{props.gameData.rbets.filter(
											(x) => x.user === props.fetchedUser.id
										) &&
											props.gameData.rbets
												.filter((x) => x.user === props.fetchedUser.id)
												.map((user) => {
													return (
														<div
															style={{
																display: "inline-block",
																marginLeft: 10,
																background: "rgba(0,0,0,.3)",
																borderRadius: 12,
																justifyContent: "center",
																alignItems: "center",
															}}
														>
															<div
																style={{
																	borderRadius: 12,
																	background: "#4caf50",
																	minWidth: 70,
																	fontSize: 21,
																	fontWeight: 600,
																	backgroundColor:
																		user.type === 1
																			? "#f3c025"
																			: user.type === 2
																			? "#0072e5"
																			: user.type === 5
																			? "#a65ecc"
																			: user.type === 10
																			? "#096"
																			: user.type === 20
																			? "#ff5722"
																			: user.type === 40
																			? "#e5004c"
																			: "white",
																}}
															>
																<div
																	style={{
																		width: "100%",
																		height: "100%",
																		textAlign: "center",
																		lineHeight: "52px",
																		verticalAlign: "middle",
																		color: "#fff",
																		fontSize: 18,
																		fontWeight: 200,
																	}}
																>
																	x{user.type}
																</div>
															</div>
															<div
																style={{
																	margin: "4px 0 2px",
																	textAlign: "center",
																	fontSize: 14,
																	fontWeight: 300,
																	color: "white",
																	...(user.win === 1
																		? { color: "#66bb6a" }
																		: null),
																	...(user.win === 2
																		? { color: "#ef5350" }
																		: null),
																}}
															>
																{props.gameData.state === 2
																	? user.win === 1
																		? "+"
																		: user.win === 2
																		? "-"
																		: ""
																	: ""}
																{bea_format(user.sum, false)}
																<div className="vkIcon">
																	<Icon28CoinsOutline width={18} height={18} />
																</div>
															</div>
														</div>
													);
												})}
									</div>
								</HorizontalScroll>
							</div>
						)}
					{props.gameData.viewnum === 1 &&
						props.gameData.bets.filter((x) => x.user === props.fetchedUser.id)
							.length > 0 &&
						!`${props.gameData.result.num}`.match(/x/i) && (
							<Fragment>
								<div
									style={{
										marginLeft: 20,
										marginRight: 20,
										padding: 15,
										background: "var(--color_background_buttons)",
										borderRadius: "var(--radius_button)",
										marginTop: 10,
										marginBottom: 10,
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
					{props.gameData.state <= 1 && <KeybordBets props={props} />}
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
											color: "white",
											borderRadius: "var(--radius_button)",
											background:
												user.type === 1
													? "#f3c025"
													: user.type === 2
													? "#0072e5"
													: user.type === 5
													? "#a65ecc"
													: user.type === 10
													? "#096"
													: user.type === 20
													? "#ff5722"
													: user.type === 40
													? "#e5004c"
													: "white",
											minWidth: 50,
											fontSize: 13,
											fontWeight: 500,
											padding: 5,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										{/(.*)x(.*)/i.test(`${user.type}`)
											? user.type
											: "x" + user.type}
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
							style={{ marginTop: 5, color: "GrayText", marginBottom: 5 }}
						>
							Hash: {props.gameData.hash}
						</Footer>
					)}
					{props.gameData.state === 2 && (
						<Footer style={{ color: "GrayText", marginBottom: 10 }}>
							Md5: {props.gameData.result.md5}
						</Footer>
					)}
				</Fragment>
			)}
		</Panel>
	);
};
const bea_format = (v) => {
	if (v >= 1000 && v < 1000000) {
		return `${(Math.floor(v / 10) / 100).toFixed(2)}${"K".repeat(1)}`;
	} else if (v >= 1000000 && v < 1000000000) {
		return `${(Math.floor(v / 10000) / 100).toFixed(2)}${"K".repeat(2)}`;
	} else if (v >= 1000000000 && v < 1000000000000) {
		return `${(Math.floor(v / 10000000) / 100).toFixed(2)}${"K".repeat(3)}`;
	} else if (v >= 1000000000000 && v < 1000000000000000) {
		return `${(Math.floor(v / 10000000000) / 100).toFixed(2)}${"K".repeat(4)}`;
	} else if (v >= 1000000000000000 && v < 1000000000000000000) {
		return `${(Math.floor(v / 10000000000000) / 100).toFixed(2)}${"K".repeat(
			5
		)}`;
	} else {
		return v;
	}
};
export default Dream;
