import { useEffect, useState, Fragment } from "react";
import {
	ConfigProvider,
	Panel,
	PanelHeader,
	CardGrid,
	Card,
	Slider,
	FormItem,
	HorizontalScroll,
	Input,
	FormStatus,
	Footer,
	SimpleCell,
	Link,
	Avatar,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon24DoneOutline,
	Icon28BombOutline,
} from "@vkontakte/icons";
const Item = ({ rangeM, open, rangeMM, click, state, fields, loseItem }) => {
	return open.map((x, y) => {
		if (!(y >= rangeM && y < rangeMM)) {
		} else {
			var color = "";
			if (state === 3) {
				if (open[y] === false) {
					color = "#8bc34a";
				} else if (open[y] === -1 && fields[y] === false) {
					color = "#2196f3";
				} else if (open[y] === true || fields[y] === true) {
					color = "#f44336";
				}
			} else {
				if (open[y] === false) {
					color = "#8bc34a";
				} else if (open[y] === true) {
					color = "#f44336";
				} else if (open[y] === -1) {
					color = "var(--color_background_buttons_dark)";
				}
			}
			return (
				<div
					className="button"
					onClick={open[y] === -1 ? () => click(y) : null}
					style={{
						margin: 2,
						display: "inline-flex",
						width: "calc(20% - 4px)",
						height: 55,
						borderRadius: 12,
						alignItems: "center",
						justifyContent: "center",
						background: color,
						justifyItems: "center",
						verticalAlign: "middle",
						color: "#fff",
						...(loseItem === y ? { boxShadow: "0 0 20px 5px #f44336" } : null),
					}}
				>
					<div
						style={{
							transition: "all .2s cubic-bezier(.175,.885,.32,1.275)",
							...(state === 3
								? { transform: "scale(1)", opacity: 1 }
								: open[y] != -1
								? { transform: "scale(1)", opacity: 1 }
								: { transform: "scale(0)", opacity: 0 }),
						}}
					>
						{open[y] === true ? (
							<Icon28BombOutline />
						) : open[y] === false ? (
							<Icon28CoinsOutline />
						) : state === 3 && fields[y] === true ? (
							<Icon28BombOutline />
						) : state === 3 && fields[y] === false ? (
							<Icon28CoinsOutline />
						) : null}
					</div>
				</div>
			);
		}
	});
};
const ListItem = ({ items, open, range, click, state, fields, loseItem }) => {
	return items.map((item, i) => {
		return (
			<div>
				<Item
					rangeMM={range * (i + 1)}
					state={state}
					rangeM={range * i}
					click={click}
					open={open}
					fields={fields}
					loseItem={loseItem}
				/>
			</div>
		);
	});
};
const ListLists = ({ props }) => {
	return (
		<div>
			<ListItem
				items={[{}, {}, {}, {}, {}]}
				open={props.gameData.open}
				loseItem={props.gameData?.loseItem}
				range={5}
				click={props.open}
				fields={props.gameData?.fields}
				state={props.gameData.state}
			/>
		</div>
	);
};
const Mines = (props) => {
	const getCoefs = (t) => {
		for (var a = 1, e = [], i = 0; i < 25 - t; i++) {
			a *= 1 - t / (25 - i);
			var r = Math.floor((0.9 / a) * 100) / 100;
			e.push(r);
		}
		return e;
	};
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
				Mines
			</PanelHeader>
			{props.loading === 0 && props?.gameData?.bombs && (
				<div
					className="gameMines"
					style={{
						overflowX: "auto",
					}}
				>
					<div className="gameContent">
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
									<span>
										{props.number_format(props.userData.coins, false)}
									</span>
									<Icon28CoinsOutline
										className="vkIcon"
										width={24}
										height={24}
										style={{ paddingLeft: 0 }}
									/>
								</div>
							</Card>
						</CardGrid>
						{props.gameData.state === 1 && (
							<Fragment>
								<div
									style={{
										marginLeft: 20,
										marginRight: 20,
										marginTop: 10,
									}}
								>
									<div
										style={{
											width: "100%",
											borderRadius: "var(--radius_button)",
											background: "var(--color_background_buttons)",
											color: "white",
											overflow: "hidden",
										}}
									>
										<div
											style={{
												padding: "40px 10px 25px",
												textAlign: "center",
											}}
										>
											<div
												style={{
													display: "inline-block",
													width: "50%",
												}}
											>
												<div
													style={{
														textTransform: "uppercase",
														fontSize: 12,
														opacity: 0.5,
														fontWeight: 200,
													}}
												>
													Бомбы
												</div>
												<div
													class="value"
													style={{
														paddingTop: 1,
														fontSize: 30,
														fontWeight: 500,
													}}
												>
													{props.getBombs} шт.
												</div>
											</div>
											<div
												style={{
													display: "inline-block",
													width: "50%",
												}}
											>
												<div
													style={{
														textTransform: "uppercase",
														fontSize: 12,
														opacity: 0.5,
														fontWeight: 200,
													}}
												>
													Коэффициент
												</div>
												<div
													class="value"
													style={{
														paddingTop: 1,
														fontSize: 30,
														fontWeight: 500,
													}}
												>
													x{getCoefs(props.getBombs)[0].toFixed(2)}
												</div>
											</div>
										</div>
										<FormItem>
											<Slider
												step={1}
												min={5}
												max={24}
												value={Number(props.getBombs)}
												onChange={(value) => props.setBombss(value)}
											/>
										</FormItem>
										<HorizontalScroll>
											<div
												style={{
													whiteSpace: "nowrap",
													paddingLeft: 10,
												}}
											>
												{getCoefs(props.getBombs).map((item, i) => {
													return (
														<div
															class="item"
															style={{
																display: "inline-block",
																minWidth: 50,
																padding: 10,
																background:
																	"var(--color_background_buttons_dark)",
																borderRadius: "var(--radius_button)",
																marginRight: 8,
																color: "var(--bw_color_text_lite)",
																marginBottom: 10,
															}}
														>
															<div
																class="game"
																style={{
																	opacity: 0.5,
																	fontWeight: 300,
																	fontSize: 12,
																}}
															>
																{i + 1} Hit
															</div>
															<div
																class="v"
																style={{
																	fontWeight: 500,
																	fontSize: 18,
																}}
															>
																x{bea_format(item)}
															</div>
														</div>
													);
												})}
											</div>
										</HorizontalScroll>
									</div>
								</div>
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
											value={props.number_format(props.gameSum)}
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
								<div
									onClick={
										props.state.bombs != props.state.gameData.bombs
											? null
											: () => props.bet()
									}
									className={
										props.state.bombs != props.state.gameData.bombs
											? ""
											: "button"
									}
									style={{
										background: "#4986cc",
										width: "calc(100% - 60px)",
										borderRadius: "var(--radius_button)",
										position: "relative",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										padding: 10,
										fontSize: 17,
										fontWeight: 500,
										marginLeft: 20,
										marginRight: 20,
										marginTop: 10,
										opacity:
											props.state.bombs != props.state.gameData.bombs ? 0.5 : 1,
									}}
								>
									<Icon24DoneOutline style={{ marginRight: 5 }} />
									Поставить
								</div>
								{props.gameData.state === 1 && (
									<Footer style={{ marginTop: 5, color: "GrayText" }}>
										Hash: {props.gameData.hash}
									</Footer>
								)}
								{props.gameData.history.map((user) => {
									return (
										<SimpleCell
											onClick={() =>
												props.openHashCheck({
													md5: user.md5,
													hash: user.hash,
													num: user.resultGame,
												})
											}
											style={{
												marginLeft: 5,
												marginRight: 10,
												color: "white",
												marginTop: 0,
											}}
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
															user.win === 1
																? "#1AB095"
																: user.win === 2
																? "#E74C3C"
																: "white",
														minWidth: 50,
														fontWeight: 200,
														fontSize: 20,
														padding: 5,
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
													}}
												>
													x{user.coef}
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
														{props.number_format(user.bet)}
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
							</Fragment>
						)}
						{props.gameData.state >= 2 && (
							<Fragment>
								<div
									style={{
										marginLeft: 20,
										marginRight: 20,
										marginTop: 10,
									}}
								>
									<div
										style={{
											width: "100%",
											borderRadius: "var(--radius_button)",
											background: "var(--color_background_buttons)",
											color: "white",
											overflow: "hidden",
										}}
									>
										<div
											style={{
												padding: "40px 10px 25px",
												textAlign: "center",
											}}
										>
											<ListLists props={props} />
										</div>
										<HorizontalScroll>
											<div
												style={{
													whiteSpace: "nowrap",
													paddingLeft: 10,
												}}
											>
												{getCoefs(props.getBombs).map((item, i) => {
													if (
														i <
														props.gameData?.open.filter((x) => x !== -1)
															.length -
															1
													)
														return;
													return (
														<div
															class="item"
															style={{
																display: "inline-block",
																minWidth: 50,
																padding: 10,
																background:
																	i ===
																	props.gameData?.open.filter((x) => x !== -1)
																		.length -
																		1
																		? "#2196f3"
																		: "var(--color_background_buttons_dark)",
																borderRadius: "var(--radius_button)",
																marginRight: 8,
																color: "var(--bw_color_text_lite)",
																marginBottom: 10,
															}}
														>
															<div
																class="game"
																style={{
																	opacity: 0.5,
																	fontWeight: 300,
																	fontSize: 12,
																}}
															>
																{i + 1} Hit
															</div>
															<div
																class="v"
																style={{
																	fontWeight: 500,
																	fontSize: 18,
																}}
															>
																x{bea_format(item)}
															</div>
														</div>
													);
												})}
											</div>
										</HorizontalScroll>
									</div>
									<FormStatus
										mode={props.gameData.win === 0 ? "error" : "default"}
										header={
											props.gameData.win === 0 ? "Вы проиграли" : "Ваш выигрыш"
										}
										style={{
											marginTop: 10,
											borderRadius: "var(--radius_button)",
											background:
												props.gameData.win === 0
													? "rgba(244, 67, 54, .2)"
													: props.gameData.state === 3
													? "#009688"
													: "var(--color_background_buttons)",
										}}
									>
										<div
											style={{
												display: "flex",
												justifyContent: "flex-start",
												alignItems: "center",
												color:
													props.gameData.win === 0
														? "rgba(244, 67, 54, .6)"
														: "white",
												fontSize: 15,
											}}
										>
											{props.number_format(
												props.gameData.win === 0
													? props.gameData.bet
													: props.gameData.win
											)}
											<Icon28CoinsOutline
												width={17}
												height={17}
												style={{
													display: "inline-flex",
												}}
											/>
											<span
												style={{
													marginLeft: 4,
													color:
														props.gameData.win === 0
															? "rgba(244, 67, 54, .6)"
															: "white",
												}}
											>
												(x
												{bea_format(
													getCoefs(props.getBombs)[
														props.gameData.open.filter((x) => x !== -1).length -
															1
													]
												)}
												)
											</span>
										</div>
									</FormStatus>
									{props.gameData.state === 2 &&
										props.gameData.open.filter((x) => x !== -1).length > 0 && (
											<div
												onClick={() => props.get()}
												className="button"
												style={{
													marginTop: 10,
													borderRadius: "var(--radius_button)",
													border: "1px sloid graytext",
													fontSize: 17,
													fontWeight: 500,
													padding: 11,
													display: "flex",
													justifyContent: "center",
													width: "calc(100% - 22px)",
													background: "#e64646",
												}}
											>
												<Icon28CoinsOutline
													width={24}
													height={24}
													style={{
														marginRight: 8,
													}}
												/>
												Забрать выигрыш
											</div>
										)}
									{props.gameData.state === 3 && (
										<div
											onClick={() => props.continue()}
											className="button"
											style={{
												marginTop: 10,
												borderRadius: "var(--radius_button)",
												border: "1px sloid graytext",
												fontSize: 17,
												fontWeight: 500,
												padding: 11,
												display: "flex",
												justifyContent: "center",
												width: "calc(100% - 22px)",
												background: "#4986cc",
											}}
										>
											<Icon24DoneOutline
												width={24}
												height={24}
												style={{
													marginRight: 8,
												}}
											/>
											Продолжить
										</div>
									)}
									{props.gameData.state <= 2 && (
										<Footer style={{ marginTop: 5, color: "GrayText" }}>
											Hash: {props.gameData.hash}
										</Footer>
									)}
									{props.gameData.state === 3 && (
										<Fragment>
											<Footer
												style={{ margin: 0, marginTop: 5, color: "GrayText" }}
											>
												Hash: {props.gameData.hash}
											</Footer>
											<Footer style={{ marginTop: 5, color: "GrayText" }}>
												Md5: {props.gameData.md5}
											</Footer>
										</Fragment>
									)}
								</div>
							</Fragment>
						)}
					</div>
				</div>
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
export default Mines;
