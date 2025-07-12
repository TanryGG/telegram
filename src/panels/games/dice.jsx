import { useEffect, useState, Fragment } from "react";
import {
	Panel,
	PanelHeader,
	ConfigProvider,
	CardGrid,
	Card,
	HorizontalScroll,
	FormItem,
	Input,
	Footer,
	SimpleCell,
	Avatar,
	Link,
	PanelHeaderButton,
	PanelHeaderContent,
	PanelHeaderContext,
	List,
	Cell,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon56RecentOutline,
	Icon28AddOutline,
	Icon16Dropdown,
	Icon24Done,
	Icon28GhostOutline,
	Icon28FavoriteOutline,
	Icon28FireOutline,
} from "@vkontakte/icons";
const DiceView = (props) => {
	const [visible, setVisible] = useState(false);
	const [balls, setBalls] = useState([]);
	useEffect(() => {
		var res = [];
		for (var i = 0; i < props.result.num; i++) {
			res.push(i);
		}
		setBalls(res);
		setTimeout(() => {
			setVisible(true);
		}, 1200);
	}, []);
	return (
		<div className={`dicesBlock state3 ${visible ? "publish" : ""}`}>
			<div className="diceWrapper">
				<div className="dice n1">
					<div
						className={`face ${
							props.result.num == 6
								? "six"
								: props.result.num == 5
								? "five"
								: props.result.num == 4
								? "four"
								: props.result.num == 3
								? "three"
								: props.result.num == 2
								? "two"
								: "one"
						}`}
					>
						{balls.map(() => {
							return <span className="ball"></span>;
						})}
					</div>
				</div>
			</div>
			{visible && <div className="result">{props.result.num}</div>}
		</div>
	);
};
const Dice2View = (props) => {
	const [visible, setVisible] = useState(false);
	const [balls1, setBalls1] = useState([]);
	const [balls2, setBalls2] = useState([]);
	useEffect(() => {
		var res = [];
		var res1 = [];
		for (var i = 0; i < props.result.nums[0]; i++) {
			res.push(i);
		}
		for (var i = 0; i < props.result.nums[1]; i++) {
			res1.push(i);
		}
		setBalls1(res);
		setBalls2(res1);
		setTimeout(() => {
			setVisible(true);
		}, 1200);
	}, []);
	return (
		<div className={`dicesBlock state3 ${visible ? "publish" : ""}`}>
			<div className="diceWrapper n1">
				<div className="dice">
					<div
						className={`face ${
							props.result.nums[0] == 6
								? "six"
								: props.result.nums[0] == 5
								? "five"
								: props.result.nums[0] == 4
								? "four"
								: props.result.nums[0] == 3
								? "three"
								: props.result.nums[0] == 2
								? "two"
								: "one"
						}`}
					>
						{balls1.map(() => {
							return <span className="ball"></span>;
						})}
					</div>
				</div>
			</div>
			<div className="diceWrapper n2">
				<div className="dice">
					<div
						className={`face ${
							props.result.nums[1] == 6
								? "six"
								: props.result.nums[1] == 5
								? "five"
								: props.result.nums[1] == 4
								? "four"
								: props.result.nums[1] == 3
								? "three"
								: props.result.nums[1] == 2
								? "two"
								: "one"
						}`}
					>
						{balls2.map(() => {
							return <span className="ball"></span>;
						})}
					</div>
				</div>
			</div>
			{visible && (
				<div className="result">
					{props.result.nums[0] + props.result.nums[1]}
				</div>
			)}
		</div>
	);
};
const Dice3View = (props) => {
	const [visible, setVisible] = useState(false);
	const [balls1, setBalls1] = useState([]);
	const [balls2, setBalls2] = useState([]);
	const [balls3, setBalls3] = useState([]);
	useEffect(() => {
		var res = [];
		var res1 = [];
		var res2 = [];
		for (var i = 0; i < props.result.nums[0]; i++) {
			res.push(i);
		}
		for (var i = 0; i < props.result.nums[1]; i++) {
			res1.push(i);
		}
		for (var i = 0; i < props.result.nums[2]; i++) {
			res2.push(i);
		}
		setBalls1(res);
		setBalls2(res1);
		setBalls3(res2);
		setTimeout(() => {
			setVisible(true);
		}, 1200);
	}, []);
	return (
		<div className={`dicesBlock state3 ${visible ? "publish" : ""}`}>
			{visible && (
				<div className="result">
					{props.result.nums[0] + props.result.nums[1] + props.result.nums[2]}
				</div>
			)}
			<div className="diceWrapper n1">
				<div className="dice">
					<div
						className={`face ${
							props.result.nums[0] == 6
								? "six"
								: props.result.nums[0] == 5
								? "five"
								: props.result.nums[0] == 4
								? "four"
								: props.result.nums[0] == 3
								? "three"
								: props.result.nums[0] == 2
								? "two"
								: "one"
						}`}
					>
						{balls1.map(() => {
							return <span className="ball"></span>;
						})}
					</div>
				</div>
			</div>
			<div className="diceWrapper n2">
				<div className="dice">
					<div
						className={`face ${
							props.result.nums[1] == 6
								? "six"
								: props.result.nums[1] == 5
								? "five"
								: props.result.nums[1] == 4
								? "four"
								: props.result.nums[1] == 3
								? "three"
								: props.result.nums[1] == 2
								? "two"
								: "one"
						}`}
					>
						{balls2.map(() => {
							return <span className="ball"></span>;
						})}
					</div>
				</div>
			</div>
			<br />
			<div className="diceWrapper n3">
				<div className="dice">
					<div
						className={`face ${
							props.result.nums[2] == 6
								? "six"
								: props.result.nums[2] == 5
								? "five"
								: props.result.nums[2] == 4
								? "four"
								: props.result.nums[2] == 3
								? "three"
								: props.result.nums[2] == 2
								? "two"
								: "one"
						}`}
					>
						{balls3.map(() => {
							return <span className="ball"></span>;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
const Dice = (props) => {
	const [contextOpened, setContextOpened] = useState(false);
	const [select, setSelect] = useState(props.id);
	useEffect(() => {
		if (select != props.id) {
			props.play(select);
		}
	}, [select]);
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
				after={
					<PanelHeaderButton>
						<Icon28AddOutline />
					</PanelHeaderButton>
				}
			>
				<PanelHeaderContent
					aside={
						<Icon16Dropdown
							style={{
								transform: `rotate(${contextOpened ? "180deg" : "0"})`,
							}}
						/>
					}
					onClick={() => {
						setContextOpened(!contextOpened);
					}}
					status={
						select.replace(/dice/gi, "") === ""
							? "1" + " кубик"
							: select.replace(/dice/gi, "") + " кубикa"
					}
				>
					Dice
				</PanelHeaderContent>
			</PanelHeader>
			<PanelHeaderContext
				opened={contextOpened}
				onClose={() => {
					setContextOpened(false);
				}}
			>
				<List>
					<Cell
						disabled={props.id === "dice"}
						before={<Icon28GhostOutline />}
						after={
							select === "dice" ? <Icon24Done fill="var(--accent)" /> : null
						}
						onClick={(value) => setSelect(value.currentTarget.dataset.mode)}
						data-mode="dice"
					>
						1 кубик
					</Cell>
					<Cell
						disabled={props.id === "2dice"}
						before={<Icon28FavoriteOutline />}
						after={
							select === "dice2" ? <Icon24Done fill="var(--accent)" /> : null
						}
						onClick={(value) => setSelect(value.currentTarget.dataset.mode)}
						data-mode="dice2"
					>
						2 кубика
					</Cell>
					<Cell
						disabled={props.id === "3dice"}
						before={<Icon28FireOutline />}
						after={
							select === "dice3" ? <Icon24Done fill="var(--accent)" /> : null
						}
						onClick={(value) => setSelect(value.currentTarget.dataset.mode)}
						data-mode="dice3"
					>
						3 кубика
					</Cell>
				</List>
			</PanelHeaderContext>
			{props.id === "dice" && (
				<div className="gameDice1">
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
						{props.gameData?.game === "dice" && props.loading === 0 && (
							<Fragment>
								<div
									style={{
										margin: 20,
										marginTop: 10,
										marginBottom: 0,
										background: "var(--color_background_buttons)",
										padding: 10,
										borderRadius: "var(--radius_button)",
										overflow: "hidden",
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
										<div style={{ display: "flex" }}>
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
																x.result.num % 2 === 0 ? "#2196f3" : "#607d8b",
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
										background: "var(--color_background_buttons)",
										marginLeft: 20,
										marginRight: 20,
										marginTop: 10,
										borderRadius: "var(--radius_button)",
										minHeight: 200,
										overflow: "hidden",
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
												minHeight: 200,
											}}
										>
											<div>
												<Icon56RecentOutline width={66} height={66} />
											</div>
											<div
												style={{
													fontSize: 25,
													fontFamily: `"Montserrat", serif`,
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
												minHeight: 200,
											}}
										>
											<div
												style={{
													fontSize: 60,
													fontFamily: `"Montserrat", serif`,
												}}
											>
												{props.gameData.time}
											</div>
										</div>
									)}
									{props.gameData.result && props.gameData.state >= 2 && (
										<DiceView result={props.gameData.result} />
									)}
								</div>
								{props.gameData.state !== 2 && (
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
											status={
												props.errorInputGame.error === true ? "error" : null
											}
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
															background:
																"var(--color_background_buttons_dark)",
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
															background:
																"var(--color_background_buttons_dark)",
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
									</Fragment>
								)}
								{props.gameData.state === 2 &&
									props.gameData.bets.filter(
										(x) => x.user === props.fetchedUser.id
									).length > 0 && (
										<div
											className="myBets"
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
																		class={`itemWrapper ${
																			props.gameData.state === 2
																				? user.win === 1
																					? "win"
																					: user.win === 2
																					? "lose"
																					: ""
																				: ""
																		}`}
																	>
																		<div
																			class={`item${
																				Number(user.type)
																					? ""
																					: " type-" + user.type
																			}`}
																		>
																			<div>
																				{user.type === "odd"
																					? "Четн"
																					: user.type === "notodd"
																					? "Нечет"
																					: user.type}
																			</div>
																		</div>
																		<div class="bet">
																			{props.gameData.state === 2
																				? user.win === 1
																					? "+"
																					: user.win === 2
																					? "-"
																					: ""
																				: ""}
																			{props.number_format(user.sum, false)}
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
								{props.gameData.state === 2 &&
									props.gameData.bets.filter(
										(x) => x.user === props.fetchedUser.id
									).length > 0 && (
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
								{props.gameData.state !== 2 && (
									<Fragment>
										<div
											style={{
												marginLeft: 20,
												marginRight: 20,
												background: "var(--field_background)",
												padding: 10,
												borderRadius: "var(--radius_button)",
												marginTop: 10,
												fontWeight: 600,
												paddingTop: 5,
											}}
										>
											<div
												style={{
													fontSize: 17,
													marginLeft: 0,
													marginBottom: 10,
													fontWeight: 600,
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
													data-bet="odd"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#2196f3",
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
													Четное<div className="coef">x1.9</div>
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
														border: "1px solid graytext",
													}}
												>
													Нечетное<div className="coef">x1.9</div>
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
													data-bet="1"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													1<div className="coef">x5</div>
												</div>
												<div
													data-bet="2"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													2<div className="coef">x5</div>
												</div>
												<div
													data-bet="3"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													3<div className="coef">x5</div>
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
													data-bet="4"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													4<div className="coef">x5</div>
												</div>
												<div
													data-bet="5"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													5<div className="coef">x5</div>
												</div>
												<div
													data-bet="6"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													6<div className="coef">x5</div>
												</div>
											</div>
										</div>
									</Fragment>
								)}
								{props.gameData.bets.map((user) => {
									return (
										<SimpleCell
											style={{
												marginLeft: 10,
												marginRight: 0,
												color: "white",
												marginTop: 5,
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
														background: Number(user.type)
															? "rgb(76, 175, 80)"
															: user.type === "odd"
															? "#2196f3"
															: user.type === "notodd"
															? "#607d8b"
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
													{user.type === "odd"
														? "Четн"
														: user.type === "notodd"
														? "Нечет"
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
														{props.number_format(user.sum, false)}
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
								{props.gameData.state <= 1 && (
									<Footer style={{ marginTop: 10, color: "GrayText" }}>
										Hash: {props.gameData.hash}
									</Footer>
								)}
								{props.gameData.state >= 2 && (
									<Fragment>
										<Footer
											style={{ margin: 0, marginTop: 10, color: "GrayText" }}
										>
											Hash: {props.gameData.hash}
										</Footer>
										<Footer style={{ marginTop: 5, color: "GrayText" }}>
											Md5: {props.gameData.result.md5}
										</Footer>
									</Fragment>
								)}
							</Fragment>
						)}
					</div>
				</div>
			)}
			{props.id === "dice2" && (
				<div className="gameDice2">
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
						{props.gameData?.game === "dice2" && props.loading === 0 && (
							<Fragment>
								<div
									style={{
										margin: 20,
										marginTop: 10,
										marginBottom: 0,
										background: "var(--color_background_buttons)",
										padding: 10,
										borderRadius: "var(--radius_button)",
										overflow: "hidden",
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
										<div style={{ display: "flex" }}>
											{props.gameData.history.map((x) => {
												return (
													<div
														onClick={() =>
															props.openHashCheck({
																num: x.result.nums[0] + x.result.nums[1],
																md5: x.result.md5,
																hash: x.hash,
															})
														}
														style={{
															borderRadius: "50%",
															background:
																x.result.nums[0] + (x.result.nums[1] % 2) === 0
																	? "#2196f3"
																	: "#607d8b",
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
														{x.result.nums[0] + x.result.nums[1]}
													</div>
												);
											})}
										</div>
									</HorizontalScroll>
								</div>
								<div
									style={{
										backgroundColor: "transparent",
										background: "var(--color_background_buttons)",
										marginLeft: 20,
										marginRight: 20,
										marginTop: 10,
										borderRadius: "var(--radius_button)",
										minHeight: 200,
										overflow: "hidden",
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
												minHeight: 200,
											}}
										>
											<div>
												<Icon56RecentOutline width={66} height={66} />
											</div>
											<div
												style={{
													fontSize: 25,
													fontFamily: `"Montserrat", serif`,
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
												minHeight: 200,
											}}
										>
											<div
												style={{
													fontSize: 60,
													fontFamily: `"Montserrat", serif`,
												}}
											>
												{props.gameData.time}
											</div>
										</div>
									)}
									{props.gameData.result && props.gameData.state >= 2 && (
										<Dice2View result={props.gameData.result} />
									)}
								</div>
								{props.gameData.state !== 2 && (
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
													+100KKK
												</div>
											</div>
										</FormItem>
										<FormItem
											style={{
												margin: 0,
												padding: 0,
											}}
											status={
												props.errorInputGame.error === true ? "error" : null
											}
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
															background:
																"var(--color_background_buttons_dark)",
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
															background:
																"var(--color_background_buttons_dark)",
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
									</Fragment>
								)}
								{props.gameData.state === 2 &&
									props.gameData.bets.filter(
										(x) => x.user === props.fetchedUser.id
									).length > 0 && (
										<div
											className="myBets"
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
																		class={`itemWrapper ${
																			props.gameData.state === 2
																				? user.win === 1
																					? "win"
																					: user.win === 2
																					? "lose"
																					: ""
																				: ""
																		}`}
																	>
																		<div
																			class={`item${
																				Number(user.type)
																					? ""
																					: " type-" + user.type
																			}`}
																		>
																			<div>
																				{user.type === "odd"
																					? "Четн"
																					: user.type === "notodd"
																					? "Нечет"
																					: user.type}
																			</div>
																		</div>
																		<div class="bet">
																			{props.gameData.state === 2
																				? user.win === 1
																					? "+"
																					: user.win === 2
																					? "-"
																					: ""
																				: ""}
																			{props.number_format(user.sum, false)}
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
								{props.gameData.state === 2 &&
									props.gameData.bets.filter(
										(x) => x.user === props.fetchedUser.id
									).length > 0 && (
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
								{props.gameData.state !== 2 && (
									<Fragment>
										<div
											style={{
												marginLeft: 20,
												marginRight: 20,
												background: "var(--field_background)",
												padding: 10,
												borderRadius: "var(--radius_button)",
												marginTop: 10,
												fontWeight: 600,
												paddingTop: 5,
											}}
										>
											<div
												style={{
													fontSize: 17,
													marginLeft: 0,
													marginBottom: 10,
													fontWeight: 600,
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
													data-bet="odd"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#2196f3",
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
													Четное<div className="coef">x1.75</div>
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
														border: "1px solid graytext",
													}}
												>
													Нечетное<div className="coef">x2.1</div>
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
													data-bet="2"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													2<div className="coef">x34</div>
												</div>
												<div
													data-bet="3"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													3<div className="coef">x17</div>
												</div>
												<div
													data-bet="4"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													4<div className="coef">x11</div>
												</div>
												<div
													data-bet="5"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													5<div className="coef">x8</div>
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
													data-bet="6"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													6<div className="coef">x6</div>
												</div>
												<div
													data-bet="7"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													7<div className="coef">x5</div>
												</div>
												<div
													data-bet="8"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													8<div className="coef">x6</div>
												</div>
												<div
													data-bet="9"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													9<div className="coef">x8</div>
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
													data-bet="10"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													10<div className="coef">x11</div>
												</div>
												<div
													data-bet="11"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													11<div className="coef">x17</div>
												</div>
												<div
													data-bet="12"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													12<div className="coef">x34</div>
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
													data-bet="1&1"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													1 & 1<div className="coef">x34</div>
												</div>
												<div
													data-bet="2&2"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													2 & 2<div className="coef">x34</div>
												</div>
												<div
													data-bet="3&3"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													3 & 3<div className="coef">x34</div>
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
													data-bet="4&4"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													4 & 4<div className="coef">x34</div>
												</div>
												<div
													data-bet="5&5"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													5 & 5<div className="coef">x34</div>
												</div>
												<div
													data-bet="6&6"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													6 & 6<div className="coef">x34</div>
												</div>
											</div>
										</div>
									</Fragment>
								)}
								{props.gameData.bets.map((user) => {
									return (
										<SimpleCell
											style={{
												marginLeft: 10,
												marginRight: 0,
												color: "white",
												marginTop: 5,
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
														background: Number(user.type)
															? "rgb(76, 175, 80)"
															: user.type === "odd"
															? "#2196f3"
															: user.type === "notodd"
															? "#607d8b"
															: user.type.match(/&/i)
															? "rgb(255, 152, 0)"
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
													{user.type === "odd"
														? "Четн"
														: user.type === "notodd"
														? "Нечет"
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
														{props.number_format(user.sum, false)}
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
								{props.gameData.state <= 1 && (
									<Footer style={{ marginTop: 10, color: "GrayText" }}>
										Hash: {props.gameData.hash}
									</Footer>
								)}
								{props.gameData.state >= 2 && (
									<Fragment>
										<Footer
											style={{ margin: 0, marginTop: 10, color: "GrayText" }}
										>
											Hash: {props.gameData.hash}
										</Footer>
										<Footer style={{ marginTop: 5, color: "GrayText" }}>
											Md5: {props.gameData.result.md5}
										</Footer>
									</Fragment>
								)}
							</Fragment>
						)}
					</div>
				</div>
			)}
			{props.id === "dice3" && (
				<div className="gameDice3">
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
						{props.gameData?.game === "dice3" && props.loading === 0 && (
							<Fragment>
								<div
									style={{
										margin: 20,
										marginTop: 10,
										marginBottom: 0,
										background: "var(--color_background_buttons)",
										padding: 10,
										borderRadius: "var(--radius_button)",
										overflow: "hidden",
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
										<div style={{ display: "flex" }}>
											{props.gameData.history.map((x) => {
												return (
													<div
														onClick={() =>
															props.openHashCheck({
																num:
																	x.result.nums[0] +
																	x.result.nums[1] +
																	x.result.nums[2],
																md5: x.result.md5,
																hash: x.hash,
															})
														}
														style={{
															borderRadius: "50%",
															background:
																x.result.nums[0] +
																	x.result.nums[1] +
																	(x.result.nums[2] % 2) ===
																0
																	? "#2196f3"
																	: "#607d8b",
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
														{x.result.nums[0] +
															x.result.nums[1] +
															x.result.nums[2]}
													</div>
												);
											})}
										</div>
									</HorizontalScroll>
								</div>
								<div
									style={{
										backgroundColor: "transparent",
										background: "var(--color_background_buttons)",
										marginLeft: 20,
										marginRight: 20,
										marginTop: 10,
										borderRadius: "var(--radius_button)",
										minHeight: 200,
										overflow: "hidden",
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
												minHeight: 200,
											}}
										>
											<div>
												<Icon56RecentOutline width={66} height={66} />
											</div>
											<div
												style={{
													fontSize: 25,
													fontFamily: `"Montserrat", serif`,
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
												minHeight: 200,
											}}
										>
											<div
												style={{
													fontSize: 60,
													fontFamily: `"Montserrat", serif`,
												}}
											>
												{props.gameData.time}
											</div>
										</div>
									)}
									{props.gameData.result && props.gameData.state >= 2 && (
										<Dice3View result={props.gameData.result} />
									)}
								</div>
								{props.gameData.state !== 2 && (
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
													+100KKK
												</div>
											</div>
										</FormItem>
										<FormItem
											style={{
												margin: 0,
												padding: 0,
											}}
											status={
												props.errorInputGame.error === true ? "error" : null
											}
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
															background:
																"var(--color_background_buttons_dark)",
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
															background:
																"var(--color_background_buttons_dark)",
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
									</Fragment>
								)}
								{props.gameData.state === 2 &&
									props.gameData.bets.filter(
										(x) => x.user === props.fetchedUser.id
									).length > 0 && (
										<div
											className="myBets"
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
																		class={`itemWrapper ${
																			props.gameData.state === 2
																				? user.win === 1
																					? "win"
																					: user.win === 2
																					? "lose"
																					: ""
																				: ""
																		}`}
																	>
																		<div
																			class={`item${
																				Number(user.type)
																					? ""
																					: " type-" + user.type
																			}`}
																		>
																			<div>
																				{user.type === "odd"
																					? "Четн"
																					: user.type === "notodd"
																					? "Нечет"
																					: user.type}
																			</div>
																		</div>
																		<div class="bet">
																			{props.gameData.state === 2
																				? user.win === 1
																					? "+"
																					: user.win === 2
																					? "-"
																					: ""
																				: ""}
																			{props.number_format(user.sum, false)}
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
								{props.gameData.state === 2 &&
									props.gameData.bets.filter(
										(x) => x.user === props.fetchedUser.id
									).length > 0 && (
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
								{props.gameData.state !== 2 && (
									<Fragment>
										<div
											style={{
												marginLeft: 20,
												marginRight: 20,
												background: "var(--field_background)",
												padding: 10,
												borderRadius: "var(--radius_button)",
												marginTop: 10,
												fontWeight: 600,
												paddingTop: 5,
											}}
										>
											<div
												style={{
													fontSize: 17,
													marginLeft: 0,
													marginBottom: 10,
													fontWeight: 600,
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
													data-bet="odd"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#2196f3",
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
													Четное<div className="coef">x1.9</div>
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
														border: "1px solid graytext",
													}}
												>
													Нечетное<div className="coef">x1.9</div>
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
													data-bet="3"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													3<div className="coef">x205</div>
												</div>
												<div
													data-bet="4"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													4<div className="coef">x68</div>
												</div>
												<div
													data-bet="5"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													5<div className="coef">x34</div>
												</div>
												<div
													data-bet="6"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													6<div className="coef">x20</div>
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
													data-bet="7"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													7<div className="coef">x13</div>
												</div>
												<div
													data-bet="8"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													8<div className="coef">x9</div>
												</div>
												<div
													data-bet="9"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													9<div className="coef">x8</div>
												</div>
												<div
													data-bet="9"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 4) - 15px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													10<div className="coef">x7</div>
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
													data-bet="11"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													11<div className="coef">x7</div>
												</div>
												<div
													data-bet="12"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													12<div className="coef">x8</div>
												</div>
												<div
													data-bet="13"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													13<div className="coef">x9</div>
												</div>
												<div
													data-bet="13"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													14<div className="coef">x13</div>
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
													data-bet="15"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													15<div className="coef">x20</div>
												</div>
												<div
													data-bet="16"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													16<div className="coef">x34</div>
												</div>
												<div
													data-bet="17"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													17<div className="coef">x68</div>
												</div>
												<div
													data-bet="28"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#4caf50",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													18<div className="coef">x205</div>
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
													data-bet="1&1&1"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													1 & 1 & 1<div className="coef">x205</div>
												</div>
												<div
													data-bet="2&2&2"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													2 & 2 & 2<div className="coef">x205</div>
												</div>
												<div
													data-bet="3&3&3"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													3 & 3 & 3<div className="coef">x205</div>
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
													data-bet="4&4&4"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													4 & 4 & 4<div className="coef">x205</div>
												</div>
												<div
													data-bet="5&5&5"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														marginRight: 5,
													}}
												>
													5 & 5 & 5<div className="coef">x205</div>
												</div>
												<div
													data-bet="6&6&6"
													onClick={(value) =>
														props.bet(value.currentTarget.dataset.bet)
													}
													className="button"
													style={{
														background: "#ff9800",
														width: "calc((100% / 3) - 10px)",
														borderRadius: "var(--radius_button)",
														position: "relative",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														padding: 10,
														border: "1px solid graytext",
													}}
												>
													6 & 6 & 6<div className="coef">x205</div>
												</div>
											</div>
										</div>
									</Fragment>
								)}
								{props.gameData.bets.map((user) => {
									return (
										<SimpleCell
											style={{
												marginLeft: 10,
												marginRight: 0,
												color: "white",
												marginTop: 5,
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
														background: Number(user.type)
															? "rgb(76, 175, 80)"
															: user.type === "odd"
															? "#2196f3"
															: user.type === "notodd"
															? "#607d8b"
															: user.type.match(/&/i)
															? "rgb(255, 152, 0)"
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
													{user.type === "odd"
														? "Четн"
														: user.type === "notodd"
														? "Нечет"
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
														{props.number_format(user.sum, false)}
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
								{props.gameData.state <= 1 && (
									<Footer style={{ marginTop: 10, color: "GrayText" }}>
										Hash: {props.gameData.hash}
									</Footer>
								)}
								{props.gameData.state >= 2 && (
									<Fragment>
										<Footer
											style={{ margin: 0, marginTop: 10, color: "GrayText" }}
										>
											Hash: {props.gameData.hash}
										</Footer>
										<Footer style={{ marginTop: 5, color: "GrayText" }}>
											Md5: {props.gameData.result.md5}
										</Footer>
									</Fragment>
								)}
							</Fragment>
						)}
					</div>
				</div>
			)}
		</Panel>
	);
};
export default Dice;
