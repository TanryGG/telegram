import { Fragment, useEffect, useState } from "react";
import "../css/home.css";
import {
	ConfigProvider,
	Panel,
	PanelHeader,
	Avatar,
	PanelHeaderContent,
	CardGrid,
	Card,
	PullToRefresh,
	FixedLayout,
	SimpleCell,
	Link,
	Div,
	Tabs,
	TabsItem,
	Footer,
	Placeholder,
	Button,
	Cell,
	List,
	Group,
} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {
	Icon28CoinsOutline,
	Icon56GiftOutline,
	Icon28UserCircleOutline,
	Icon28MenuOutline,
	Icon28PollSquareOutline,
	Icon28GameOutline,
	Icon28LocationOutline,
} from "@vkontakte/icons";
import {
	Icon24ClockOutline,
	Icon28Messages,
	Icon28LogoVkOutline,
	Icon28AddOutline,
} from "@vkontakte/icons";
import { Icon28GlobeOutline } from "@vkontakte/icons";
import { Icon20StarsFilled, Icon56GestureOutline } from "@vkontakte/icons";
import { isDesktop, isMobile } from "react-device-detect";
const Home = (props) => {
	return (
		<ConfigProvider platform="ios">
			<Panel id={props.id}>
				{props.screen === "home" && (
					<Fragment>
						<PanelHeader
							separator={false}
							left={
								<Avatar
									style={{ borderRadius: "25%" }}
									size={36}
									src={props.fetchedUser?.photo_200}
								/>
							}
						>
							<PanelHeaderContent>
								<span style={{ color: "white" }}>Профиль</span>
							</PanelHeaderContent>
						</PanelHeader>
						{props.loading === 0 && (
							<PullToRefresh
								onRefresh={props.refreshData}
								isFetching={props.isLoad}
							>
								<Fragment>
									<div style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%"
									}}>
										<div style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											marginBottom: -40,
											background: "blue",
											borderRadius: "0 0 10px 10px",
											padding: "5px 10px",
											opacity: .8
										}}>Резерв бота: {number_format(props.userData.balanceBot)} Cazis</div>
									</div>
									<CardGrid
										style={{
											padding: 20,
											paddingTop: 12,
											paddingBottom: 0,
											width: "calc(100% - 40px)",
											maxWidth: 440,
											margin: "0 auto",
										}}
										size="l"
									>
										<Card className="BalanceImg">
											<div className="balance">
												<div
													className="coinsTop"
													style={{
														color: "white",
														fontSize: 20,
													}}
												>
													Ваш счет:
												</div>
												<div className="coins">
													<div
														className="verticalText"
														style={{ lineHeight: "30px" }}
													>
														{number_format(props.userData.coins)}
													</div>
													<Icon28CoinsOutline width={40} height={40} />
												</div>
											</div>
										</Card>
										<div style={{
											display: "flex",
											width: "100%",
											height: 70
										}}>
											<div className="button" style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												flex: 1,
												background: "blue",
												borderRadius: 20,
												marginLeft: 5,
												fontSize: 20
											}} onClick={props.openBuyModal}>
												Пополнить
											</div>
											<div className="button" style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												flex: 1,
												background: "blue",
												borderRadius: 20,
												marginRight: 5,
												fontSize: 20
											}} onClick={props.openSellModal}>
												Вывести
											</div>
										</div>
										{props.userData.bonus.isActive && (
											<Card
												onClick={props.getBonus}
												className="BalanceImg button"
												style={{
													border: "1px solid GrayText",
													overflow: "hidden",
												}}
											>
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														textAlign: "center",
														color: "#3c6",
														padding: 20,
														fontSize: 30,
														position: "relative",
														fontWeight: 500,
													}}
												>
													<div
														style={{
															position: "absolute",
															transform: "rotate(40deg)",
															left: 0,
														}}
													>
														<Icon56GiftOutline width={70} height={70} />
													</div>
													<div
														style={{
															position: "absolute",
															transform: "rotate(40deg)",
															right: 0,
														}}
													>
														<Icon56GiftOutline width={70} height={70} />
													</div>
													БОНУС
												</div>
											</Card>
										)}
										<img
											onClick={props.openTopDayLayout}
											className="button"
											src={props.topDayImg}
											style={{
												display: "block",
												width: "100%",
												padding: 0,
												marginTop: 5,
												borderRadius: "var(--radius_button)",
											}}
										/>
										<img
											onClick={props.openPromoModal}
											className="button"
											src={props.promoButtonImg}
											style={{
												display: "block",
												width: "100%",
												padding: 0,
												marginTop: 10,
												borderRadius: "var(--radius_button)",
											}}
										/>
										 <Card className="BalanceImg">
											<div
												className="stat"
												style={{
													zIndex: 1,
												}}
											>
												<div
													style={{
														display: "flex",
														position: "relative",
														overflow: "hidden",
														borderRadius: "20px",
														height: 150,
													}}
												>
													<div
														style={{
															position: "absolute",
															top: 0,
															left: 0,
															right: 0,
															textAlign: "center",
															zIndex: 2,
														}}
													>
														<div
															style={{
																background: "white",
																padding: "5px 10px",
																borderRadius: "0 0 12px 12px",
																display: "inline-block",
																color: "#55585e",
															}}
														>
															Статистика за день
														</div>
													</div>
													<div
														style={{
															display: "flex",
															width: "50%",
															height: "100%",
															justifyContent: "center",
															alignItems: "center",
															color: "white",
															position: "relative",
														}}
													>
														<div
															style={{
																zIndex: 2,
																display: "flex",
																flexDirection: "column",
																justifyContent: "center",
																alignItems: "center",
															}}
														>
															<div
																style={{
																	fontWeight: "400",
																}}
															>
																Выигрыши
															</div>
															<div
																style={{
																	marginTop: 5,
																	fontWeight: "600",
																	fontSize: 21,
																}}
															>
																{props.userData.stats.day.win}
															</div>
														</div>
														<div
															style={{
																position: "absolute",
																left: 0,
																height: "100%",
																width: `${
																	!Number(
																		(
																			200 /
																			Number(
																				(
																					(props.userData.stats.day.lose +
																						props.userData.stats.day.win) /
																					props.userData.stats.day.win
																				).toFixed(2)
																			)
																		).toFixed(2)
																	)
																		? 100
																		: Number(
																				(
																					200 /
																					Number(
																						(
																							(props.userData.stats.day.lose +
																								props.userData.stats.day.win) /
																							props.userData.stats.day.win
																						).toFixed(2)
																					)
																				).toFixed(2)
																		  )
																}%`,
																background: "#3c6",
															}}
														></div>
													</div>
													<div
														style={{
															display: "flex",
															width: "50%",
															height: "100%",
															justifyContent: "center",
															alignItems: "center",
															color: "white",
															position: "relative",
														}}
													>
														<div
															style={{
																zIndex: 2,
																display: "flex",
																flexDirection: "column",
																justifyContent: "center",
																alignItems: "center",
															}}
														>
															<div
																style={{
																	fontWeight: "400",
																}}
															>
																Проигрыши
															</div>
															<div
																style={{
																	marginTop: 5,
																	fontWeight: "600",
																	fontSize: 21,
																}}
															>
																{props.userData.stats.day.lose}
															</div>
														</div>
														<div
															style={{
																position: "absolute",
																right: 0,
																height: "100%",
																background: "#d41132",
																width: `${
																	!Number(
																		(
																			200 /
																			Number(
																				(
																					(props.userData.stats.day.lose +
																						props.userData.stats.day.win) /
																					props.userData.stats.day.lose
																				).toFixed(2)
																			)
																		).toFixed(2)
																	)
																		? 100
																		: Number(
																				(
																					200 /
																					Number(
																						(
																							(props.userData.stats.day.lose +
																								props.userData.stats.day.win) /
																							props.userData.stats.day.lose
																						).toFixed(2)
																					)
																				).toFixed(2)
																		  )
																}%`,
															}}
														></div>
													</div>
												</div>
											</div>
										</Card>
										<Card className="BalanceImg">
											<div
												className="stat"
												style={{
													zIndex: 1,
												}}
											>
												<div
													style={{
														display: "flex",
														position: "relative",
														overflow: "hidden",
														borderRadius: "20px",
														height: 150,
													}}
												>
													<div
														style={{
															position: "absolute",
															top: 0,
															left: 0,
															right: 0,
															textAlign: "center",
															zIndex: 2,
														}}
													>
														<div
															style={{
																background: "white",
																padding: "5px 10px",
																borderRadius: "0 0 12px 12px",
																display: "inline-block",
																color: "#55585e",
															}}
														>
															За всё время
														</div>
													</div>
													<div
														style={{
															display: "flex",
															width: "50%",
															height: "100%",
															justifyContent: "center",
															alignItems: "center",
															color: "white",
															position: "relative",
														}}
													>
														<div
															style={{
																zIndex: 2,
																display: "flex",
																flexDirection: "column",
																justifyContent: "center",
																alignItems: "center",
															}}
														>
															<div
																style={{
																	fontWeight: "400",
																}}
															>
																Выигрыши
															</div>
															<div
																style={{
																	marginTop: 5,
																	fontWeight: "600",
																	fontSize: 21,
																}}
															>
																{props.userData.stats.all.win}
															</div>
														</div>
														<div
															style={{
																position: "absolute",
																left: 0,
																height: "100%",
																width: `${
																	!Number(
																		(
																			200 /
																			Number(
																				(
																					(props.userData.stats.all.lose +
																						props.userData.stats.all.win) /
																					props.userData.stats.all.win
																				).toFixed(2)
																			)
																		).toFixed(2)
																	)
																		? 100
																		: Number(
																				(
																					200 /
																					Number(
																						(
																							(props.userData.stats.all.lose +
																								props.userData.stats.all.win) /
																							props.userData.stats.all.win
																						).toFixed(2)
																					)
																				).toFixed(2)
																		  )
																}%`,
																background: "#3c6",
															}}
														></div>
													</div>
													<div
														style={{
															display: "flex",
															width: "50%",
															height: "100%",
															justifyContent: "center",
															alignItems: "center",
															color: "white",
															position: "relative",
														}}
													>
														<div
															style={{
																zIndex: 2,
																display: "flex",
																flexDirection: "column",
																justifyContent: "center",
																alignItems: "center",
															}}
														>
															<div
																style={{
																	fontWeight: "400",
																}}
															>
																Проигрыши
															</div>
															<div
																style={{
																	marginTop: 5,
																	fontWeight: "600",
																	fontSize: 21,
																}}
															>
																{props.userData.stats.all.lose}
															</div>
														</div>
														<div
															style={{
																position: "absolute",
																right: 0,
																height: "100%",
																background: "#d41132",
																width: `${
																	!Number(
																		(
																			200 /
																			Number(
																				(
																					(props.userData.stats.all.lose +
																						props.userData.stats.all.win) /
																					props.userData.stats.all.lose
																				).toFixed(2)
																			)
																		).toFixed(2)
																	)
																		? 100
																		: Number(
																				(
																					200 /
																					Number(
																						(
																							(props.userData.stats.all.lose +
																								props.userData.stats.all.win) /
																							props.userData.stats.all.lose
																						).toFixed(2)
																					)
																				).toFixed(2)
																		  )
																}%`,
															}}
														></div>
													</div>
												</div>
											</div>
										</Card> 
									</CardGrid>
									<Footer
										style={{
											marginBottom: 60,
										}}
									>
										Онлайн: {props.userData.online}
									</Footer>
								</Fragment>
							</PullToRefresh>
						)}
					</Fragment>
				)}
				{props.screen === "rating" && (
					<Fragment>
						<PanelHeader
							separator={false}
							left={
								<Icon28PollSquareOutline
									width={36}
									height={36}
									style={{ borderRadius: "25%", marginLeft: 4 }}
								/>
							}
						>
							<PanelHeaderContent>
								<span style={{ color: "white" }}>Рейтинг</span>
							</PanelHeaderContent>
						</PanelHeader>
						<Tabs>
							{/* <TabsItem
							onClick={() => props.setActiveTabRating('topHour')}
							selected={props.activeTabRating === 'topHour'}
						>Топ часа</TabsItem> */}
							<TabsItem
								onClick={() => props.setActiveTabRating("topDay")}
								selected={props.activeTabRating === "topDay"}
							>
								Топ дня
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveTabRating("topWeek")}
								selected={props.activeTabRating === "topWeek"}
							>
								Топ недели
							</TabsItem>
						</Tabs>
						{props.activeTabRating === "topDay" && (
							<Fragment>
								{props.loading === 0 && (
									<Fragment>
										<CardGrid size="l">
											<Card className="BalanceImg">
												<div
													style={{
														background: `url(${props.ratingLabelImg}) 50% no-repeat`,
														backgroundSize: "cover",
														borderRadius: 12,
														marginTop: 10,
														// border: "1px solid GrayText",
														overflow: "hidden",
														padding: 15,
														paddingBottom: 0,
													}}
												>
													<div
														style={{
															display: "flex",
															color: "white",
															fontSize: 21,
															fontWeight: 600,
															alignItems: "center",
														}}
													>
														<Icon20StarsFilled width={28} height={28} />
														<div
															style={{
																marginLeft: 10,
																flexGrow: 1,
															}}
														>
															Топ дня
														</div>
													</div>
													<div
														style={{
															fontSize: 16,
															marginTop: 10,
														}}
													>
														Каждый день в 0:00 мы разыгрываем{" "}
														<span
															style={{
																fontWeight: 600,
															}}
														>
															{lil_format(
																props.topSumDay.reduce((acc, x) => acc + x, 0)
															)}{" "}
															Cazis
														</span>{" "}
														среди топ-{props.topSumDay.length} лучших игроков.
													</div>
													<br />
													<div
														style={{
															marginBottom: 20,
															display: "flex",
														}}
													>
														<div
															style={{
																width: "100%",
																textAlign: "center",
																color: "#f5f5f5",
															}}
														>
															<div
																style={{
																	opacity: 0.7,
																	fontSize: 11,
																	fontWeight: 400,
																}}
															>
																ВЫДАЧА ПРИЗОВ
															</div>
															<div
																style={{
																	fontSize: 18,
																	fontWeight: 600,
																	color: "#ffd54f",
																	whiteSpace: "nowrap",
																	padding: "0 10px",
																}}
															>
																в 0:00
															</div>
														</div>
														<div
															style={{
																width: 2,
																height: 30,
																background: "#f5f5f5",
																opacity: 0.5,
																marginTop: 5,
															}}
														></div>
														<div
															style={{
																width: "100%",
																textAlign: "center",
																color: "#f5f5f5",
															}}
														>
															<div
																style={{
																	opacity: 0.7,
																	fontSize: 11,
																	fontWeight: 400,
																}}
															>
																НАГРАДА
															</div>
															<div
																style={{
																	fontSize: 18,
																	fontWeight: 600,
																	color: "#ffd54f",
																	whiteSpace: "nowrap",
																	padding: "0 10px",
																}}
															>
																{lil_format(
																	props.topSumDay.reduce((acc, x) => acc + x, 0)
																)}{" "}
																Cazis
															</div>
														</div>
													</div>
												</div>
											</Card>
										</CardGrid>
										<br />
										<PullToRefresh
											onRefresh={props.refreshTop}
											isFetching={props.isLoad}
										>
											<List>
												{props.getTop.day.rating.map((user, i) => {
													return (
														<Link
															key={user.id + "topDay"}
															hasHover={false}
															href={"https://vk.com/id" + user.id}
															target="_blank"
														>
															<Cell
																id="rating"
																indicator={
																	<div class="prize">
																		<div class="header">ПОЛУЧИТ</div>
																		<div class="sum">
																			{lil_format(props.topSumDay?.[i] ?? 0)}
																		</div>
																	</div>
																}
																expandable
																className="MyUserTop"
																style={{
																	marginTop: 0,
																	marginBottom: 0,
																	borderRadius: 0,
																}}
																before={
																	<table className="table">
																		<tr>
																			<td>
																				<div className="ratingPosition">
																					{i + 1}
																				</div>
																			</td>
																			<td style={{ position: "relative" }}>
																				<Avatar
																					style={{ borderRadius: "25%" }}
																					src={user.photo ? user.photo : null}
																					size={44}
																				/>
																			</td>
																		</tr>
																	</table>
																}
																subtitle={number_format(user.value) + " Coin"}
															>
																<div
																	style={{
																		color: user.photo ? user.color : `white`,
																	}}
																>
																	{user.nick ? user.nick : `@${user.id}`}
																</div>
															</Cell>
														</Link>
													);
												})}
												<SimpleCell
													key={props.fetchedUser.id + "myTopDay"}
													disabled
													className="MyUserTop"
													style={{
														marginTop: 0,
														marginBottom: 60,
														borderRadius: 0,
														background: "var(--color_background_buttons)",
													}}
													before={
														<table className="table">
															<tr>
																<td>
																	<div className="ratingPosition">
																		{props.getTop.day.myPosition + 1}
																	</div>
																</td>
																<td style={{ position: "relative" }}>
																	<Avatar
																		style={{ borderRadius: "25%" }}
																		src={
																			props.fetchedUser.photo_200
																				? props.fetchedUser.photo_200
																				: null
																		}
																		size={44}
																	/>
																</td>
															</tr>
														</table>
													}
													subtitle={
														number_format(props.userData.stats.topDay) + " Coin"
													}
												>
													<div
														style={{
															color: props.userData.color
																? user.color
																: `white`,
														}}
													>
														{props.userData.nick
															? props.userData.nick
															: `${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
													</div>
												</SimpleCell>
											</List>
										</PullToRefresh>
									</Fragment>
								)}
							</Fragment>
						)}
						{props.activeTabRating === "topWeek" && (
							<Fragment>
								{props.loading === 0 && (
									<Fragment>
										<CardGrid size="l">
											<Card className="BalanceImg">
												<div
													style={{
														background: `url(${props.ratingLabelImg}) 50% no-repeat`,
														backgroundSize: "cover",
														borderRadius: 12,
														marginTop: 10,
														// border: "1px solid GrayText",
														overflow: "hidden",
														padding: 15,
														paddingBottom: 0,
													}}
												>
													<div
														style={{
															display: "flex",
															color: "white",
															fontSize: 21,
															fontWeight: 600,
															alignItems: "center",
														}}
													>
														<Icon28GlobeOutline width={28} height={28} />
														<div
															style={{
																marginLeft: 10,
																flexGrow: 1,
															}}
														>
															Топ недели
														</div>
													</div>
													<div
														style={{
															fontSize: 16,
															marginTop: 10,
														}}
													>
														Каждую неделю в ночь с воскресенья на понедельник мы
														разыгрываем{" "}
														<span
															style={{
																fontWeight: 600,
															}}
														>
															{lil_format(
																props.topSumWeek.reduce((acc, x) => acc + x, 0)
															)}{" "}
															Cazis
														</span>{" "}
														среди топ-{props.topSumWeek.length} лучших игроков.
													</div>
													<br />
													<div
														style={{
															marginBottom: 20,
															display: "flex",
														}}
													>
														<div
															style={{
																width: "100%",
																textAlign: "center",
																color: "#f5f5f5",
															}}
														>
															<div
																style={{
																	opacity: 0.7,
																	fontSize: 11,
																	fontWeight: 400,
																}}
															>
																ВЫДАЧА ПРИЗОВ
															</div>
															<div
																style={{
																	fontSize: 18,
																	fontWeight: 600,
																	color: "#ffd54f",
																	whiteSpace: "nowrap",
																	padding: "0 10px",
																}}
															>
																воскр. 23:59
															</div>
														</div>
														<div
															style={{
																width: 2,
																height: 30,
																background: "#f5f5f5",
																opacity: 0.5,
																marginTop: 5,
															}}
														></div>
														<div
															style={{
																width: "100%",
																textAlign: "center",
																color: "#f5f5f5",
															}}
														>
															<div
																style={{
																	opacity: 0.7,
																	fontSize: 11,
																	fontWeight: 400,
																}}
															>
																НАГРАДА
															</div>
															<div
																style={{
																	fontSize: 18,
																	fontWeight: 600,
																	color: "#ffd54f",
																	whiteSpace: "nowrap",
																	padding: "0 10px",
																}}
															>
																{lil_format(
																	props.topSumWeek.reduce(
																		(acc, x) => acc + x,
																		0
																	)
																)}{" "}
																Cazis
															</div>
														</div>
													</div>
												</div>
											</Card>
										</CardGrid>
										<br />
										<PullToRefresh
											onRefresh={props.refreshTop}
											isFetching={props.isLoad}
										>
											<List>
												{props.getTop.week.rating.map((user, i) => (
													<Link
														key={user.id + "topWeek"}
														hasHover={false}
														href={"https://vk.com/id" + user.id}
														target="_blank"
													>
														<Cell
															id="rating"
															indicator={
																<Fragment>
																	{i <= 9 && (
																		<div class="prize">
																			<div class="header">ПОЛУЧИТ</div>
																			<div class="sum">
																				{lil_format(props.topSumWeek?.[i] ?? 0)}
																			</div>
																		</div>
																	)}
																</Fragment>
															}
															expandable
															className="MyUserTop"
															style={{
																marginTop: 0,
																marginBottom: 0,
																borderRadius: 0,
															}}
															before={
																<table className="table">
																	<tr>
																		<td>
																			<div className="ratingPosition">
																				{i + 1}
																			</div>
																		</td>
																		<td style={{ position: "relative" }}>
																			<Avatar
																				style={{ borderRadius: "25%" }}
																				src={user.photo ? user.photo : null}
																				size={44}
																			/>
																		</td>
																	</tr>
																</table>
															}
															subtitle={number_format(user.value) + " Coin"}
														>
															<div
																style={{
																	color: user.photo ? user.color : `white`,
																}}
															>
																{user.nick ? user.nick : `@${user.id}`}
															</div>
														</Cell>
													</Link>
												))}
												<SimpleCell
													key={props.fetchedUser.id + "myTopWeek"}
													disabled
													className="MyUserTop"
													style={{
														marginTop: 0,
														marginBottom: 60,
														borderRadius: 0,
														background: "var(--color_background_buttons)",
													}}
													before={
														<table className="table">
															<tr>
																<td>
																	<div className="ratingPosition">
																		{props.getTop.week.myPosition + 1}
																	</div>
																</td>
																<td style={{ position: "relative" }}>
																	<Avatar
																		style={{ borderRadius: "25%" }}
																		src={
																			props.fetchedUser.photo_200
																				? props.fetchedUser.photo_200
																				: null
																		}
																		size={44}
																	/>
																</td>
															</tr>
														</table>
													}
													subtitle={
														number_format(props.userData.stats.topWeek) +
														" Coin"
													}
												>
													<div
														style={{
															color: props.userData.color
																? user.color
																: `white`,
														}}
													>
														{props.userData.nick
															? props.userData.nick
															: `${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`}
													</div>
												</SimpleCell>
											</List>
										</PullToRefresh>
									</Fragment>
								)}
							</Fragment>
						)}
						{/* {props.activeTabRating === "topHour" && <Fragment>
						{props.loading === 0 && <Fragment>
							<CardGrid size="l">
								<Card className='BalanceImg'>
									<div style={{
										background: `url(${props.ratingLabelImg}) 50% no-repeat`,
										backgroundSize: "cover",
										borderRadius: 12,
										marginTop: 10,
										padding: 15
									}}>
										<div style={{
											display: "flex",
											color: "white",
											fontSize: 21,
											fontWeight: 600,
											alignItems: "center"
										}}>
											<Icon24ClockOutline width={28} height={28} />
											<div style={{
												marginLeft: 10,
												flexGrow: 1
											}}>Топ часа</div>
										</div>
										<div style={{
											fontSize: 16,
											marginTop: 10
										}}>Каждый час с 18:00 по 22:00 мы разыгрываем <span style={{
											fontWeight: 600
										}}>110KK Coin</span> среди топ-5 лучших игроков.</div>
										<br />
										<div style={{
											marginBottom: 20,
											display: "flex"
										}}>
											<div style={{
												width: "100%",
												textAlign: "center",
												color: "#f5f5f5"
											}}>
												<div style={{
													opacity: .7,
													fontSize: 11,
													fontWeight: 400
												}}>ВЫДАЧА ПРИЗОВ</div>
												<div style={{
													fontSize: 18,
													fontWeight: 600,
													color: "#ffd54f",
													whiteSpace: "nowrap",
													padding: "0 10px"
												}}>в 19:00</div>
											</div>
											<div style={{
												width: 2,
												height: 30,
												background: "#f5f5f5",
												opacity: .5,
												marginTop: 5
											}}></div>
											<div style={{
												width: "100%",
												textAlign: "center",
												color: "#f5f5f5"
											}}>
												<div style={{
													opacity: .7,
													fontSize: 11,
													fontWeight: 400
												}}>НАГРАДА</div>
												<div style={{
													fontSize: 18,
													fontWeight: 600,
													color: "#ffd54f",
													whiteSpace: "nowrap",
													padding: "0 10px"
												}}>110KK Coin</div>
											</div>
										</div>
									</div>
								</Card>
							</CardGrid>
							<br />
							<PullToRefresh onRefresh={props.refreshTop} isFetching={props.isLoad}>
								<Footer>Топ часа будет запущен за час до следующей выдачи</Footer>
							</PullToRefresh>
						</Fragment>}
					</Fragment>} */}
					</Fragment>
				)}
				{props.screen === "games" && (
					<Fragment>
						<PanelHeader
							separator={false}
							left={
								<Icon28GameOutline
									width={36}
									height={36}
									style={{ borderRadius: "25%", marginLeft: 4 }}
								/>
							}
						>
							<PanelHeaderContent>
								<span style={{ color: "white" }}>Игры</span>
							</PanelHeaderContent>
						</PanelHeader>
						<Group
							style={{
								overflow: "auto",
								height: "100%",
								marginBottom: 50,
							}}
						>
							<List>
								<CardGrid size={isMobile ? `m` : "s"}>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="wheel"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.wheelLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Wheel</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="b7s"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.b7sLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Под 7 Над</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="dice"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.diceLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Dice</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="mines"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.minesLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Mines</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="dream"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.dreamLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Dream</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="tower"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.towerLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Tower</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="thimble"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.thimbleLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Thimble</div>
									</Card>
									{/* <Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="crash"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.crashLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Crash</div>
									</Card> */}
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="double"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.doubleLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Double</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="alcoslots"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.alcoslotsLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>AlcoSlots</div>
									</Card>
									<Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="goldwest"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.goldWestLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>GoldWest</div>
									</Card>
									{/* <Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="nvuti"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.nvutiLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Nvuti</div>
									</Card> */}
									{/* <Card
										style={{ backgroundColor: "transparent", height: "120px" }}
										className="button"
										onClick={(v) => props.play(v.currentTarget.dataset.game)}
										data-game="keno"
									>
										<div
											style={{
												width: "100%",
												height: "100%",
												display: "inline-block",
												borderRadius: "var(--radius_button)",
												background: `url(${props.kenoLabelImg}) no-repeat 50%`,
												backgroundSize: "cover",
											}}
										></div>
										<div className={"name"}>Keno</div>
									</Card> */}
								</CardGrid>
							</List>
						</Group>
					</Fragment>
				)}
				{props.screen === "other" && (
					<Fragment>
						<PanelHeader
							separator={false}
							left={
								<Icon28MenuOutline
									width={36}
									height={36}
									style={{ borderRadius: "25%", marginLeft: 4 }}
								/>
							}
						>
							<PanelHeaderContent>
								<span style={{ color: "white" }}>Ещё</span>
							</PanelHeaderContent>
						</PanelHeader>
						<Div>
							<div
								className="addcom"
								onClick={() => bridge.send("VKWebAppAddToCommunity")}
							>
								<SimpleCell
									disabled
									style={{
										marginBottom: 10,
										backgroundColor: "var(--color_background_buttons)",
										borderRadius: "var(--radius_button)",
										color: "#F39C12",
									}}
									expandable
									before={
										<Icon28AddOutline
											fill={"#F39C12"}
											style={{ paddingRight: 15 }}
										/>
									}
								>
									Добавить в сообщество
								</SimpleCell>
							</div>
							<Link
								hasHover={false}
								href="https://vk.com/gameapp_cazis"
								target="_blank"
							>
								<SimpleCell
									disabled
									style={{
										marginBottom: 10,
										backgroundColor: "var(--color_background_buttons)",
										borderRadius: "var(--radius_button)",
										color: "#3498DB",
									}}
									expandable
									before={
										<Icon28LogoVkOutline
											fill="#3498DB"
											style={{ paddingRight: 15 }}
										/>
									}
								>
									Наша группа
								</SimpleCell>
							</Link>
							<Link
								hasHover={false}
								href="https://vk.me/join/mHrlWJEOa5uFHH8QjRY5RtehTFM3oFQcQ3M="
								target="_blank"
							>
								<SimpleCell
									disabled
									style={{
										marginBottom: 10,
										backgroundColor: "var(--color_background_buttons)",
										borderRadius: "var(--radius_button)",
										color: "#1ABC9C",
									}}
									expandable
									before={
										<Icon28Messages
											fill="#1ABC9C"
											style={{ paddingRight: 15 }}
										/>
									}
								>
									Чат игроков
								</SimpleCell>
							</Link>
						</Div>
					</Fragment>
				)}
				{/* {(props.screen === "clans" && props.fetchedUser.id != 578382301) && <Fragment>
				<PanelHeader separator={false} left={<Icon28GlobeOutline width={36} height={36} style={{borderRadius: "25%", marginLeft: 4}}/>}>
						<PanelHeaderContent>
							<span style={{ color: 'white' }}>Команды</span>
						</PanelHeaderContent>
					</PanelHeader>
					<Footer>Команды пока что находятся в разработке...</Footer>
				</Fragment>} */}
				{props.screen === "clans" && props.fetchedUser.id === 578382301 && (
					<Fragment>
						<PanelHeader
							separator={false}
							left={
								<Icon28GlobeOutline
									width={36}
									height={36}
									style={{ borderRadius: "25%", marginLeft: 4 }}
								/>
							}
						>
							<PanelHeaderContent>
								<span style={{ color: "white" }}>Команды</span>
							</PanelHeaderContent>
						</PanelHeader>
						<Tabs>
							<TabsItem
								onClick={() => props.setActiveTabClans("topClans")}
								selected={props.activeTabClans === "topClans"}
							>
								Топ Команд
							</TabsItem>
							<TabsItem
								onClick={() => props.setActiveTabClans("myClan")}
								selected={props.activeTabClans === "myClan"}
							>
								Моя команда
							</TabsItem>
						</Tabs>
						{props.activeTabClans === "topClans" && (
							<Fragment>
								<CardGrid size="l">
									<Card className="BalanceImg">
										<div
											style={{
												background: `url(${props.ratingLabelImg}) 50% no-repeat`,
												backgroundSize: "cover",
												borderRadius: 12,
												marginTop: 10,
												// border: "1px solid GrayText",
												overflow: "hidden",
												padding: 15,
												paddingBottom: 0,
											}}
										>
											<div
												style={{
													display: "flex",
													color: "white",
													fontSize: 21,
													fontWeight: 600,
													alignItems: "center",
												}}
											>
												<Icon28GlobeOutline width={28} height={28} />
												<div
													style={{
														marginLeft: 10,
														flexGrow: 1,
													}}
												>
													Топ недели
												</div>
											</div>
											<div
												style={{
													fontSize: 16,
													marginTop: 10,
												}}
											>
												Каждую неделю в ночь с воскресенья на понедельник мы
												разыгрываем{" "}
												<span
													style={{
														fontWeight: 600,
													}}
												>
													3KK Cazis
												</span>{" "}
												среди топ-10 лучших игроков.
											</div>
											<br />
											<div
												style={{
													marginBottom: 20,
													display: "flex",
												}}
											>
												<div
													style={{
														width: "100%",
														textAlign: "center",
														color: "#f5f5f5",
													}}
												>
													<div
														style={{
															opacity: 0.7,
															fontSize: 11,
															fontWeight: 400,
														}}
													>
														ВЫДАЧА ПРИЗОВ
													</div>
													<div
														style={{
															fontSize: 18,
															fontWeight: 600,
															color: "#ffd54f",
															whiteSpace: "nowrap",
															padding: "0 10px",
														}}
													>
														воскр. 23:59
													</div>
												</div>
												<div
													style={{
														width: 2,
														height: 30,
														background: "#f5f5f5",
														opacity: 0.5,
														marginTop: 5,
													}}
												></div>
												<div
													style={{
														width: "100%",
														textAlign: "center",
														color: "#f5f5f5",
													}}
												>
													<div
														style={{
															opacity: 0.7,
															fontSize: 11,
															fontWeight: 400,
														}}
													>
														НАГРАДА
													</div>
													<div
														style={{
															fontSize: 18,
															fontWeight: 600,
															color: "#ffd54f",
															whiteSpace: "nowrap",
															padding: "0 10px",
														}}
													>
														3KK Cazis
													</div>
												</div>
											</div>
										</div>
									</Card>
								</CardGrid>
								{props.getTop?.clans &&
									props.getTop.clans.rating.map((clan, i) => {
										return (
											<SimpleCell
												onClick={(value) =>
													props.openClanInfo(
														Number(value.currentTarget.dataset.cid)
													)
												}
												data-cid={clan.id}
												expandable
												className="MyUserTop"
												style={{
													marginTop: 0,
													marginBottom: 0,
													borderRadius: 0,
												}}
												before={
													<table className="table">
														<tr>
															<td>
																<div className="ratingPosition">{i + 1}</div>
															</td>
															<td style={{ position: "relative" }}>
																<Avatar
																	style={{ borderRadius: "25%" }}
																	src={clan.avatar ? clan.avatar : null}
																	size={44}
																/>
															</td>
														</tr>
													</table>
												}
												subtitle={number_format(clan.value) + " Coin"}
											>
												<div
													style={{
														color: clan.avatar ? clan.color : `white`,
													}}
												>
													{clan.name ? clan.name : `@${clan.id}`}
												</div>
											</SimpleCell>
										);
									})}
							</Fragment>
						)}
						{props.activeTabClans === "myClan" && (
							<Fragment>
								{!props.userData.clan && (
									<div
										style={{
											height: "75%",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Placeholder
											icon={<Icon56GestureOutline fill={"rgb(255, 152, 0)"} />}
											action={
												<div
													style={{
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
													}}
												>
													<Button
														onClick={props.openCreateClanLayout}
														style={{
															background: "#e91e63",
															color: "white",
															marginRight: 5,
															marginLeft: 20,
														}}
														before={<Icon28AddOutline />}
														size="m"
														mode="tertiary"
													>
														Создать команду
													</Button>
													<Button
														onClick={() => props.setActiveTabClans("topClans")}
														style={{
															background: "#3f51b5",
															color: "white",
															marginRight: 20,
															marginLeft: 5,
														}}
														before={<Icon28LocationOutline />}
														size="m"
														mode="tertiary"
													>
														Найти команду
													</Button>
												</div>
											}
											header="Вы не состоите в команде"
										>
											Присоединитесь к команде и получайте множество бонусов за
											активную игру!
										</Placeholder>
									</div>
								)}
								{props.myClanData && (
									<div>{JSON.stringify(props.myClanData)}</div>
								)}
							</Fragment>
						)}
					</Fragment>
				)}
				<FixedLayout vertical="bottom">
					<div
						style={{
							width: "100%",
							height: 50,
							background: "var(--color_background_buttons)",
							position: "relative",
							color: "white",
						}}
					>
						<ul
							style={{
								width: "100%",
								display: "flex",
							}}
						>
							<div
								style={{
									zIndex: 0,
								}}
							>
								{props.snackBar}
							</div>
							<li
								onClick={() =>
									props.screen !== "home" ? props.changeScreen("home") : null
								}
								style={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "calc(100% / 5)",
									padding: 10,
									listStyle: "none",
									zIndex: 1,
								}}
							>
								<div
									style={{
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
										textAlign: "center",
										fontWeight: "500",
									}}
								>
									<span
										style={{
											position: "relative",
											display: "block",
											lineHeight: 75,
											fontSize: "1.5em",
											textAlign: "center",
											transition: "0.5s",
											zIndex: 1,
											...(props.screen === "home"
												? { transform: "translateY(-25px)" }
												: null),
											zIndex: 1,
										}}
									>
										<Icon28UserCircleOutline height={30} width={30} />
									</span>
									<span
										style={{
											position: "absolute",
											color: "white",
											fontWeight: "400",
											fontSize: "0.75em",
											letterSpacing: "0.05em",
											transition: "0.5s",
											opacity: props.screen === "home" ? 1 : 0,
											transform: "translateY(35px)",
											...(props.screen === "home"
												? { transform: "translateY(10px)" }
												: null),
										}}
									>
										Профиль
									</span>
									<div
										style={{
											width: 40,
											height: 40,
											background: "rgb(31,155,180)",
											background:
												"linear-gradient(180deg, rgba(31,155,180,1) 12%, rgba(66,157,41,1) 100%)",
											border: "5px solid var(--color_background_buttons_bg)",
											position: "absolute",
											borderRadius: "25%",
											opacity: 0,
											transition: "0.5s",
											...(props.screen === "home"
												? { transform: "translateY(-25px)", opacity: 1 }
												: null),
										}}
									></div>
								</div>
							</li>
							{/* <li onClick={() => props.screen !== 'clans' ? props.changeScreen("clans") : null} style={{
								position: "relative",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "calc(100% / 5)",
								padding: 10,
								listStyle: 'none',
								zIndex: 1
							}}>
								<div style={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									textAlign: 'center',
									fontWeight: "500"
								}}>
									<span style={{
										position: "relative",
										display: "block",
										lineHeight: 75,
										fontSize: "1.5em",
										textAlign: "center",
										transition: "0.5s",
										zIndex: 1,
										...props.screen === 'clans' ? {transform: "translateY(-25px)"} : null,
										zIndex: 1
									}}><Icon28GlobeOutline height={30} width={30} /></span>
									<span style={{
										position: "absolute",
										color: "white",
										fontWeight: "400",
										fontSize: "0.75em",
										letterSpacing: "0.05em",
										transition: "0.5s",
										opacity: props.screen === 'clans' ? 1 : 0,
										transform: "translateY(35px)",
										...props.screen === 'clans' ? {transform: "translateY(10px)"} : null
									}}>Команды</span>
									<div style={{
										width: 40,
										height: 40,
										background: "rgb(31,155,180)",
										background: "linear-gradient(180deg, rgba(31,155,180,1) 12%, rgba(66,157,41,1) 100%)",
										border: "5px solid var(--color_background_buttons_bg)",
										position: "absolute",
										borderRadius: "25%",
										opacity: 0,
										transition: "0.5s",
										...props.screen === 'clans' ? {transform: "translateY(-25px)",opacity: 1} : null
									}}></div>
								</div>
							</li> */}
							<li
								onClick={() =>
									props.screen !== "games" ? props.changeScreen("games") : null
								}
								style={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "calc(100% / 5)",
									padding: 10,
									listStyle: "none",
								}}
							>
								<div
									style={{
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
										textAlign: "center",
										fontWeight: "500",
									}}
								>
									<span
										style={{
											position: "relative",
											display: "block",
											lineHeight: 75,
											fontSize: "1.5em",
											textAlign: "center",
											transition: "0.5s",
											...(props.screen === "games"
												? { transform: "translateY(-25px)" }
												: null),
											zIndex: 1,
										}}
									>
										<Icon28GameOutline height={30} width={30} />
									</span>
									<span
										style={{
											position: "absolute",
											color: "white",
											fontWeight: "400",
											fontSize: "0.75em",
											letterSpacing: "0.05em",
											transition: "0.5s",
											opacity: props.screen === "games" ? 1 : 0,
											transform: "translateY(35px)",
											...(props.screen === "games"
												? { transform: "translateY(10px)" }
												: null),
										}}
									>
										Играть
									</span>
									<div
										style={{
											width: 40,
											height: 40,
											background: "rgb(31,155,180)",
											background:
												"linear-gradient(180deg, rgba(31,155,180,1) 12%, rgba(66,157,41,1) 100%)",
											border: "5px solid var(--color_background_buttons_bg)",
											position: "absolute",
											borderRadius: "25%",
											opacity: 0,
											transition: "0.5s",
											...(props.screen === "games"
												? { transform: "translateY(-25px)", opacity: 1 }
												: null),
										}}
									></div>
								</div>
							</li>
							<li
								onClick={() =>
									props.screen !== "rating"
										? props.changeScreen("rating")
										: null
								}
								style={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "calc(100% / 5)",
									padding: 10,
									listStyle: "none",
								}}
							>
								<div
									style={{
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
										textAlign: "center",
										fontWeight: "500",
									}}
								>
									<span
										style={{
											position: "relative",
											display: "block",
											lineHeight: 75,
											fontSize: "1.5em",
											textAlign: "center",
											transition: "0.5s",
											...(props.screen === "rating"
												? { transform: "translateY(-25px)" }
												: null),
											zIndex: 1,
										}}
									>
										<Icon28PollSquareOutline height={30} width={30} />
									</span>
									<span
										style={{
											position: "absolute",
											color: "white",
											fontWeight: "400",
											fontSize: "0.75em",
											letterSpacing: "0.05em",
											transition: "0.5s",
											opacity: props.screen === "rating" ? 1 : 0,
											transform: "translateY(35px)",
											...(props.screen === "rating"
												? { transform: "translateY(10px)" }
												: null),
										}}
									>
										Рейтинг
									</span>
									<div
										style={{
											width: 40,
											height: 40,
											background: "rgb(31,155,180)",
											background:
												"linear-gradient(180deg, rgba(31,155,180,1) 12%, rgba(66,157,41,1) 100%)",
											border: "5px solid var(--color_background_buttons_bg)",
											position: "absolute",
											borderRadius: "25%",
											opacity: 0,
											transition: "0.5s",
											...(props.screen === "rating"
												? { transform: "translateY(-25px)", opacity: 1 }
												: null),
										}}
									></div>
								</div>
							</li>
							<li
								onClick={() =>
									props.screen !== "other" ? props.changeScreen("other") : null
								}
								style={{
									position: "relative",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									width: "calc(100% / 5)",
									padding: 10,
									listStyle: "none",
								}}
							>
								<div
									style={{
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										flexDirection: "column",
										textAlign: "center",
										fontWeight: "500",
									}}
								>
									<span
										style={{
											position: "relative",
											display: "block",
											lineHeight: 75,
											fontSize: "1.5em",
											textAlign: "center",
											transition: "0.5s",
											...(props.screen === "other"
												? { transform: "translateY(-25px)" }
												: null),
											zIndex: 1,
										}}
									>
										<Icon28MenuOutline height={30} width={30} />
									</span>
									<span
										style={{
											position: "absolute",
											color: "white",
											fontWeight: "400",
											fontSize: "0.75em",
											letterSpacing: "0.05em",
											transition: "0.5s",
											opacity: props.screen === "other" ? 1 : 0,
											transform: "translateY(35px)",
											...(props.screen === "other"
												? { transform: "translateY(10px)" }
												: null),
										}}
									>
										Ещё
									</span>
									<div
										style={{
											width: 40,
											height: 40,
											background: "rgb(31,155,180)",
											background:
												"linear-gradient(180deg, rgba(31,155,180,1) 12%, rgba(66,157,41,1) 100%)",
											border: "5px solid var(--color_background_buttons_bg)",
											position: "absolute",
											borderRadius: "25%",
											opacity: 0,
											transition: "0.5s",
											...(props.screen === "other"
												? { transform: "translateY(-25px)", opacity: 1 }
												: null),
										}}
									></div>
								</div>
							</li>
						</ul>
					</div>
				</FixedLayout>
			</Panel>
		</ConfigProvider>
	);
};
function number_format(number, decimals, dec_point, thousands_sep) {
	var i, j, kw, kd, km;
	decimals = false;
	if (isNaN((decimals = Math.abs(decimals)))) {
		decimals = 2;
	}
	if (dec_point == undefined) {
		dec_point = ".";
	}
	if (thousands_sep == undefined) {
		thousands_sep = " ";
	}

	i = parseInt((number = (+number || 0).toFixed(decimals))) + "";

	if ((j = i.length) > 3) {
		j = j % 3;
	} else {
		j = 0;
	}

	km = j ? i.substr(0, j) + thousands_sep : "";
	kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	kd = decimals
		? dec_point +
		  Math.abs(number - i)
				.toFixed(decimals)
				.replace(/-/, 0)
				.slice(2)
		: "";
	return km + kw + kd;
}

function lil_format(number) {
	if (number < 1000) {
		return number;
	}
	if (number > 999 && number < 1000000) {
		return (number / 1000).toFixed(0) + "K";
	}
	if (number > 999999 && number < 1000000000) {
		return (number / 1000000).toFixed(1) + "KK";
	}
	if (number > 999999999) {
		return (number / 1000000000).toFixed(1) + "KKK";
	}
}
export default Home;
