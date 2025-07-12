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
	Icon28BombOutline,
} from "@vkontakte/icons";
const KeybordBets = (props) => {
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
				onClick={
					props.state.bombs != props.state.gameData.bombs
						? null
						: () => props.bet()
				}
				className={
					props.state.bombs != props.state.gameData.bombs ? "" : "button"
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
					opacity: props.state.bombs != props.state.gameData.bombs ? 0.5 : 1,
				}}
			>
				<Icon24DoneOutline style={{ marginRight: 5 }} />
				Поставить
			</div>
		</Fragment>
	);
};
const Buttons = ({ props, item }) => {
	var color = [
		"#8bc34a",
		"#2196f3",
		"#f44336",
		"var(--color_background_buttons_dark)",
	];
	return (
		<Fragment>
			<div
				className="button"
				onClick={
					props.gameData.line === item
						? (v) => props.open(Number(v.currentTarget.dataset.itemid))
						: null
				}
				data-itemid={0}
				style={{
					width:
						props.gameData.bombs === 1
							? "calc(50% - 3px)"
							: `calc((100% / 3) - 3px)`,
					height: 45,
					display: "flex",
					marginLeft: 3,
					marginTop: 3,
					alignSelf: "flex-start",
					alignItems: "center",
					justifyContent: "center",
					background:
						props.gameData.state === 3
							? props.gameData.open[item] === 0
								? color[0]
								: props.gameData.fields[item][0] === true
								? color[2]
								: color[1]
							: props.gameData.open[item] === 0
							? color[0]
							: props.gameData.open[item] === true
							? color[2]
							: color[3],
					borderRadius: 12,
					transition: "transform .2s cubic-bezier(.175,.885,.32,1.275)",
					color: "white",
					...(props.gameData.state === 3
						? props.gameData.loseItem === 0 &&
						  props.gameData.open[item] === true
							? { boxShadow: "0 0 10px 0 #f44336" }
							: null
						: null),
				}}
			>
				{props.gameData.state === 3 ? (
					props.gameData.open[item] === 0 ? (
						<Icon28CoinsOutline />
					) : props.gameData.fields[item][0] === true ? (
						<Icon28BombOutline />
					) : (
						<Icon28CoinsOutline />
					)
				) : props.gameData.open[item] === 0 ? (
					<Icon28CoinsOutline />
				) : props.gameData.open[item] === true ? (
					<Icon28BombOutline />
				) : null}
			</div>
			<div
				className="button"
				onClick={
					props.gameData.line === item
						? (v) => props.open(Number(v.currentTarget.dataset.itemid))
						: null
				}
				data-itemid={1}
				style={{
					width:
						props.gameData.bombs === 1
							? "calc(50% - 3px)"
							: `calc((100% / 3) - 3px)`,
					height: 45,
					display: "flex",
					marginLeft: 3,
					marginTop: 3,
					alignSelf: "flex-start",
					alignItems: "center",
					justifyContent: "center",
					background:
						props.gameData.state === 3
							? props.gameData.open[item] === 1
								? color[0]
								: props.gameData.fields[item][1] === true
								? color[2]
								: color[1]
							: props.gameData.open[item] === 1
							? color[0]
							: props.gameData.open[item] === true
							? color[2]
							: color[3],
					borderRadius: 12,
					transition: "transform .2s cubic-bezier(.175,.885,.32,1.275)",
					color: "white",
					...(props.gameData.state === 3
						? props.gameData.loseItem === 1 &&
						  props.gameData.open[item] === true
							? { boxShadow: "0 0 10px 0 #f44336" }
							: null
						: null),
				}}
			>
				{props.gameData.state === 3 ? (
					props.gameData.open[item] === 1 ? (
						<Icon28CoinsOutline />
					) : props.gameData.fields[item][1] === true ? (
						<Icon28BombOutline />
					) : (
						<Icon28CoinsOutline />
					)
				) : props.gameData.open[item] === 1 ? (
					<Icon28CoinsOutline />
				) : props.gameData.open[item] === true ? (
					<Icon28BombOutline />
				) : null}
			</div>
			{props.gameData.bombs === 2 && (
				<div
					className="button"
					onClick={
						props.gameData.line === item
							? (v) => props.open(Number(v.currentTarget.dataset.itemid))
							: null
					}
					data-itemid={2}
					style={{
						width:
							props.gameData.bombs === 1
								? "calc(50% - 3px)"
								: `calc((100% / 3) - 3px)`,
						height: 45,
						display: "flex",
						marginLeft: 3,
						marginTop: 3,
						alignSelf: "flex-start",
						alignItems: "center",
						justifyContent: "center",
						background:
							props.gameData.state === 3
								? props.gameData.open[item] === 2
									? color[0]
									: props.gameData.fields[item][2] === true
									? color[2]
									: color[1]
								: props.gameData.open[item] === 2
								? color[0]
								: props.gameData.open[item] === true
								? color[2]
								: color[3],
						borderRadius: 12,
						transition: "transform .2s cubic-bezier(.175,.885,.32,1.275)",
						color: "white",
						...(props.gameData.state === 3
							? props.gameData.loseItem === 2 &&
							  props.gameData.open[item] === true
								? { boxShadow: "0 0 10px 0 #f44336" }
								: null
							: null),
					}}
				>
					{props.gameData.state === 3 ? (
						props.gameData.open[item] === 2 ? (
							<Icon28CoinsOutline />
						) : props.gameData.fields[item][2] === true ? (
							<Icon28BombOutline />
						) : (
							<Icon28CoinsOutline />
						)
					) : props.gameData.open[item] === 2 ? (
						<Icon28CoinsOutline />
					) : props.gameData.open[item] === true ? (
						<Icon28BombOutline />
					) : null}
				</div>
			)}
		</Fragment>
	);
};
const GoldWest = (props) => {
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
				GoldWest
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
					{props.gameData.state === 1 && (
						<div
							style={{
								width: "calc(100% - 40px)",
								borderRadius: 12,
								background: "var(--color_background_buttons)",
								color: "var(--bw_color_text)",
								overflow: "hidden",
								marginRight: 20,
								marginLeft: 20,
								marginTop: 10,
							}}
						>
							<div
								style={{
									padding: "30px 10px 20px",
									textAlign: "center",
									display: "flex",
									color: "var(--bw_color_text)",
								}}
							>
								<div
									onClick={() => props.setBombss(1)}
									style={{
										width: "100%",
										opacity: props.getBombs === 1 ? 1 : 0.2,
										transition: "all .1s linear",
									}}
								>
									<div
										style={{
											textTransform: "uppercase",
											fontSize: 14,
											opacity: 0.7,
											fontWeight: 200,
										}}
									>
										1 бомба
									</div>
									<div
										style={{
											fontSize: 41,
											fontWeight: 500,
										}}
									>
										X2
									</div>
								</div>
								<div
									onClick={() => props.setBombss(2)}
									style={{
										width: "100%",
										opacity: props.getBombs === 2 ? 1 : 0.2,
										transition: "all .1s linear",
									}}
								>
									<div
										style={{
											textTransform: "uppercase",
											fontSize: 14,
											opacity: 0.7,
											fontWeight: 200,
										}}
									>
										2 бомбы
									</div>
									<div
										style={{
											fontSize: 41,
											fontWeight: 500,
										}}
									>
										X3
									</div>
								</div>
							</div>
							<HorizontalScroll>
								<div
									style={{
										whiteSpace: "nowrap",
										paddingLeft: 10,
									}}
								>
									{genCoefs(props.getBombs).map((item, i) => {
										return (
											<div
												class="item"
												style={{
													display: "inline-block",
													minWidth: 50,
													padding: 10,
													background: "var(--color_background_buttons_dark)",
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
					)}
					{props.gameData.state >= 2 && (
						<div
							style={{
								width: "calc(100% - 40px)",
								borderRadius: 12,
								background: "var(--color_background_buttons)",
								color: "var(--bw_color_text)",
								overflow: "hidden",
								marginRight: 20,
								marginLeft: 20,
								marginTop: 10,
								flexDirection: "column-reverse",
								display: "flex",
							}}
						>
							{props.gameData.open.map((x, i) => {
								return (
									<div
										style={{
											opacity: i === props.gameData.line ? 1 : 0.5,
											transition: "all .4s ease-in-out",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											minHeight: "fit-content",
										}}
									>
										<div
											style={{
												width: 70,
												background: "var(--color_background_buttons_dark)",
												height: 45,
												borderRadius: 12,
												display: "flex",
												justifyContent: "center",
												flexDirection: "column",
												paddingLeft: 7,
												marginTop: 2,
											}}
										>
											<div
												style={{
													fontWeight: 300,
													fontSize: 12,
												}}
											>
												{i + 1} LVL
											</div>
											<div
												style={{
													fontWeight: 500,
													fontSize: 16,
												}}
											>
												x{bea_format(genCoefs(props.getBombs)[i])}
											</div>
										</div>
										<div
											style={{
												flexGrow: 1,
												display: "flex",
											}}
										>
											<Buttons props={props} item={i} />
										</div>
									</div>
								);
							})}
						</div>
					)}
					{props.gameData.state >= 2 && (
						<FormStatus
							mode={props.gameData.win === 0 ? "error" : "default"}
							header={props.gameData.win === 0 ? "Вы проиграли" : "Ваш выигрыш"}
							style={{
								marginTop: 10,
								borderRadius: "var(--radius_button)",
								marginRight: 20,
								marginLeft: 20,
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
										genCoefs(props.getBombs)[
											props.gameData.open.filter((x) => x !== -1).length - 1
										]
									)}
									)
								</span>
							</div>
						</FormStatus>
					)}
					{props.gameData.state <= 1 && <KeybordBets {...props} />}
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
									width: "calc(100% - 62px)",
									background: "#e64646",
									marginRight: 20,
									marginLeft: 20,
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
								width: "calc(100% - 62px)",
								marginRight: 20,
								marginLeft: 20,
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
					{props.gameData.state <= 1 &&
						props.gameData.history.map((user) => {
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
					{props.gameData.state <= 2 && (
						<Footer style={{ marginTop: 5, color: "GrayText" }}>
							Hash: {props.gameData.hash}
						</Footer>
					)}
					{props.gameData.state === 3 && (
						<Fragment>
							<Footer style={{ margin: 0, marginTop: 5, color: "GrayText" }}>
								Hash: {props.gameData.hash}
							</Footer>
							<Footer style={{ marginTop: 5, color: "GrayText" }}>
								Md5: {props.gameData.md5}
							</Footer>
						</Fragment>
					)}
				</Fragment>
			)}
		</Panel>
	);
};
const genCoefs = function (t) {
	var a = 1,
		e = [],
		i = 1,
		r = 2;
	2 === t && ((i = 2), (r = 3));
	for (var s = 0; s < 10; s++) {
		a *= 1 - i / r;
		var n = Math.floor((0.95 / a) * 100) / 100;
		e.push(n);
	}
	return e;
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
export default GoldWest;
