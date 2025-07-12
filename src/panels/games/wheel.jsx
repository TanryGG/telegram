import { Fragment, useState, useEffect } from "react";
import {
	Panel,
	ConfigProvider,
	PanelHeader,
	CardGrid,
	Card,
	HorizontalScroll,
	Footer,
	FormItem,
	Input,
	SimpleCell,
	Link,
	Avatar,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon56RecentOutline,
} from "@vkontakte/icons";
const Wheel = (props) => {
	const [keybord, setKeybord] = useState("default");
	return (
		<Panel id={props.id}>
			<Fragment>
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
					Wheel
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
				{props.gameData?.game === "wheel" && props.loading === 0 && (
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
														num: x.result.num,
														md5: x.result.md5,
														hash: x.hash,
													})
												}
												style={{
													borderRadius: "50%",
													background:
														x.result.color === "red"
															? "#f44336"
															: x.result.color === "black"
															? "#101010"
															: x.result.num === 0
															? "#8bc34a"
															: "white",
													fontSize: 21,
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													marginRight: 10,
													fontWeight: 200,
													lineHeight: "42px",
													verticalAlign: "middle",
													minWidth: 40,
													minHeight: 40,
												}}
											>
												{x.result.num}
											</div>
										);
									})}
								</div>
							</HorizontalScroll>
						</div>
						<div
							style={{
								backgroundColor: "transparent",
								// background: 'var(--color_background_buttons)',
								marginLeft: 20,
								marginRight: 20,
								marginTop: 10,
								borderRadius: "var(--radius_button)",
								minHeight: 200,
								overflow: "hidden",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
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
											fontSize: 25,
										}}
									>
										Ждём ставок...
									</div>
								</div>
							)}
							{props.gameData.state === 1 && (
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
										color: "#1abc9c",
									}}
								>
									<div
										style={{
											fontSize: 60,
										}}
									>
										{props.gameData.time}
									</div>
								</div>
							)}
							{props.gameData.state === 2 && (
								<div
									style={{
										position: "relative",
										minHeight: 220,
										background: "var(--events_card_color_bg)",
										borderRadius: 12,
										textAlign: "center",
										overflow: "hidden",
									}}
								>
									<div
										style={{
											textAlign: "center",
											paddingTop: 10,
										}}
									>
										<div
											style={{
												position: "relative",
												display: "inline-block",
											}}
										>
											<div
												style={{
													transform: `rotateZ(${props.gameData.result.adddeg}deg)`,
													transformOrigin: "50% 50%",
												}}
											>
												<div
													style={{
														width: 200,
														height: 200,
														background: `url(${props.wheelImg})`,
														backgroundSize: "cover",
														animation: "wheel-animation 10s ease both",
														transformOrigin: "50% 50%",
													}}
												></div>
											</div>
											<div
												style={{
													transform: `rotateZ(${
														props.balldeg[props.gameData.result.num] +
														props.gameData.result.adddeg
													}deg)`,
													position: "absolute",
													top: 0,
													left: 0,
													transformOrigin: "50% 50%",
												}}
											>
												<div
													style={{
														animation: "ball-animation 11s ease both",
														transformOrigin: "50% 50%",
													}}
												>
													<div
														style={{
															background: `url(${props.ballImg})`,
															width: 200,
															height: 200,
															backgroundSize: "cover",
															animation: "ball-animation-2 11s ease both",
															transformOrigin: "50% 50%",
														}}
													></div>
												</div>
											</div>
											{props.gameData.viewnum === 1 && (
												<div
													style={{
														background:
															props.gameData.result.num === 0
																? "#8bc34a"
																: props.gameData.result.color === "red"
																? "#f44336"
																: "#101010",
														position: "absolute",
														top: "35%",
														left: "35%",
														width: 58,
														height: 58,
														transform: "translate(-50%,-50%)",
														borderRadius: "50%",
														opacity: 0.9,
														animation: "show-result-text .6s linear both",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														fontSize: 30,
													}}
												>
													{props.gameData.result.num}
												</div>
											)}
										</div>
									</div>
								</div>
							)}
						</div>
						{props.gameData.state === 1 &&
							props.gameData.rbets.filter(
								(x) => x.user === props.fetchedUser.id
							).length > 0 && (
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
											{props.gameData.bets.filter(
												(x) => x.user === props.fetchedUser.id
											) &&
												props.gameData.bets
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
																			user.type === "notodd"
																				? "#607d8b"
																				: user.type === "odd"
																				? "#009688"
																				: user.type === "red"
																				? "#f44336"
																				: user.type === "black"
																				? "#101010"
																				: user.type.match(/range/i)
																				? "#3f51b5"
																				: props.rednum.find(
																						(x) => x === Number(user.type)
																				  )
																				? "#f44336"
																				: Number(user.type) === 0
																				? "#8bc34a"
																				: "#101010",
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
																		{user.type === "odd"
																			? "Чет"
																			: user.type === "notodd"
																			? "Нечет"
																			: user.type === "black"
																			? "Черн"
																			: user.type === "red"
																			? "Красн"
																			: user.type === "range1"
																			? "1-18"
																			: user.type === "range2"
																			? "19-36"
																			: user.type === "range3"
																			? "1-12"
																			: user.type === "range4"
																			? "13-24"
																			: user.type === "range5"
																			? "25-36"
																			: user.type}
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
																		<Icon28CoinsOutline
																			width={18}
																			height={18}
																		/>
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
						{props.gameData.state <= 1 && (
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
										props.errorInputGame.error === true
											? props.errorInputGame.desc
											: null
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
												props.changesumgame(
													value.currentTarget.value.replace(/ /gi, "")
												)
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
								{keybord === "default" && (
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
											}}
										>
											<div
												className="button"
												data-bet="red"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												style={{
													background: "#f44336",
													width: "calc((100% / 2) - 5px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													marginRight: 5,
												}}
											>
												Красное<div className="coef">x2</div>
											</div>
											<div
												data-bet="black"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#101010",
													width: "calc((100% / 2) - 5px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
												}}
											>
												Черное<div className="coef">x2</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												data-bet="odd"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#009688",
													width: "calc((100% / 2) - 5px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													marginRight: 5,
												}}
											>
												Четное<div className="coef">x2</div>
											</div>
											<div
												data-bet="notodd"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#607d8b",
													width: "calc((100% / 2) - 5px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
												}}
											>
												Нечетное<div className="coef">x2</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												data-bet="range1"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#3f51b5",
													width: "calc(40% - 10px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													marginRight: 5,
												}}
											>
												1-18<div className="coef">x2</div>
											</div>
											<div
												data-bet="0"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#8bc34a",
													width: "calc(20% - 10px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													marginRight: 5,
												}}
											>
												0<div className="coef">x36</div>
											</div>
											<div
												data-bet="range2"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#3f51b5",
													width: "calc(40% - 10px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
												}}
											>
												19-36<div className="coef">x2</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												data-bet="range3"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#3f51b5",
													width: "calc(40% - 10px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													marginRight: 5,
												}}
											>
												1-12<div className="coef">x3</div>
											</div>
											<div
												data-bet="range4"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#3f51b5",
													width: "calc(40% - 10px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													marginRight: 5,
												}}
											>
												13-24<div className="coef">x3</div>
											</div>
											<div
												data-bet="range5"
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												className="button"
												style={{
													background: "#3f51b5",
													width: "calc(40% - 10px)",
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
												}}
											>
												25-36<div className="coef">x3</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												onClick={() => setKeybord("numbers")}
												style={{
													background: "#fff",
													width: "100%",
													borderRadius: "var(--radius_button)",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													color: "black",
												}}
											>
												Поставить на число
											</div>
										</div>
									</div>
								)}
								{keybord === "numbers" && (
									<div
										style={{
											marginTop: 10,
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
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="1"
											>
												1<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="2"
											>
												2<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="3"
											>
												3<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="4"
											>
												4<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="5"
											>
												5<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="6"
											>
												6<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="7"
											>
												7<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="8"
											>
												8<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="9"
											>
												9<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="10"
											>
												10
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="11"
											>
												11
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="12"
											>
												12
												<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="13"
											>
												13
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="14"
											>
												14
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="15"
											>
												15
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="16"
											>
												16
												<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="17"
											>
												17
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="18"
											>
												18
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="19"
											>
												19
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="20"
											>
												20
												<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="21"
											>
												21
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="22"
											>
												22
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="23"
											>
												23
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="24"
											>
												24
												<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="25"
											>
												25
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="26"
											>
												26
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="27"
											>
												27
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="28"
											>
												28
												<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="29"
											>
												29
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="30"
											>
												30
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="31"
											>
												31
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="32"
											>
												32
												<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="33"
											>
												33
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="34"
											>
												34
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#101010",
													marginRight: 5,
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="35"
											>
												35
												<div className="coef">x36</div>
											</div>
											<div
												className="button"
												style={{
													borderRadius: "var(--radius_button)",
													position: "relative",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													width: "calc(25% - 6px)",
													background: "#f44336",
												}}
												onClick={(value) =>
													props.bet(value.currentTarget.dataset.bet)
												}
												data-bet="36"
											>
												36
												<div className="coef">x36</div>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												width: "100%",
												marginTop: 5,
											}}
										>
											<div
												className="button"
												style={{
													background: "#fff",
													width: "100%",
													borderRadius: "var(--radius_button)",
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
													padding: 10,
													color: "black",
												}}
												onClick={() => setKeybord("default")}
											>
												Назад
											</div>
										</div>
									</div>
								)}
							</Fragment>
						)}
						{props.gameData.bets.length > 0 && (
							<div
								style={{
									marginLeft: 20,
									marginTop: 10,
									marginBottom: 5,
									color: "white",
									fontSize: 17,
									fontWeight: 500,
								}}
							>
								Ставки игроков:
							</div>
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
												color: "white",
												borderRadius: "var(--radius_button)",
												background:
													user.type === "notodd"
														? "#607d8b"
														: user.type === "odd"
														? "#009688"
														: user.type === "red"
														? "#f44336"
														: user.type === "black"
														? "#101010"
														: user.type.match(/range/i)
														? "#3f51b5"
														: props.rednum.find((x) => x === Number(user.type))
														? "#f44336"
														: Number(user.type) === 0
														? "#8bc34a"
														: "#101010",
												minWidth: 50,
												fontSize: 13,
												fontWeight: 500,
												padding: 5,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
											}}
										>
											{user.type === "odd"
												? "Чет"
												: user.type === "notodd"
												? "Нечет"
												: user.type === "black"
												? "Черн"
												: user.type === "red"
												? "Красн"
												: user.type === "range1"
												? "1-18"
												: user.type === "range2"
												? "19-36"
												: user.type === "range3"
												? "1-12"
												: user.type === "range4"
												? "13-24"
												: user.type === "range5"
												? "25-36"
												: user.type}
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
						{props.gameData.viewnum === 0 && (
							<Footer
								style={{ marginTop: 5, color: "GrayText", marginBottom: 10 }}
							>
								Hash: {props.gameData.hash}
							</Footer>
						)}
						{props.gameData.viewnum === 1 && (
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
			</Fragment>
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

export default Wheel;
