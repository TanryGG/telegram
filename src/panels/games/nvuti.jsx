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
	Slider,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon24DoneOutline,
	Icon56DiamondOutline,
} from "@vkontakte/icons";
const round = (t, a) => {
	return parseFloat(parseFloat(t).toFixed(a));
};
const Nvuti = (props) => {
	const [state, setState] = useState({
		v: 50,
		coef: 1.9,
		t: 0,
	});
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
				Nvuti
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
			{props.loading === 0 && props.gameData?.game == "nvuti" && (
				<Fragment>
					{props.gameData.state === 1 && (
						<div
							style={{
								width: "calc(100% - 40px)",
								borderRadius: 12,
								background: "var(--color_background_buttons)",
								color: "white",
								marginRight: 20,
								marginLeft: 20,
								marginTop: 10,
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
										Вероятность
									</div>
									<div
										style={{
											paddingTop: 1,
											fontSize: 30,
											fontWeight: 500,
										}}
									>
										{state.v}%
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
										style={{
											paddingTop: 1,
											fontSize: 30,
											fontWeight: 500,
										}}
									>
										x{round((100 / state.v) * 0.95, 2).toFixed(2)}
									</div>
								</div>
							</div>
							<Slider
								min={1}
								max={85}
								value={state.v}
								step={1}
								onChange={(v) => setState((e) => ({ ...e, v }))}
								style={{
									marginRight: 20,
									marginLeft: 20,
									marginBottom: 15,
								}}
							/>
						</div>
					)}
					{props.gameData.state === 3 && (
						<Fragment>
							<div
								style={{
									width: "calc(100% - 40px)",
									borderRadius: 12,
									background: "var(--color_background_buttons)",
									color: "white",
									marginRight: 20,
									marginLeft: 20,
									marginTop: 10,
								}}
							>
								<span
									style={{
										width: "100%",
										display: "inline-block",
										paddingTop: 40,
										textAlign: "center",
										fontSize: 36,
										fontWeight: 300,
									}}
								>
									{props.number_format(props.gameData.number)}
								</span>
								<div
									style={{
										width: "100%",
										display: "inline-block",
										paddingBottom: 30,
										textAlign: "center",
										fontWeight: 200,
										color:
											props.gameData.win !== 0
												? "#009688"
												: "rgba(244, 67, 54, .6)",
									}}
								>
									{state.t === 0
										? `1 - ${props.number_format(
												9999 + state.v * 10000 - 10000
										  )}`
										: `${props.number_format(
												990000 - state.v * 10000 + 10000
										  )} - 999 999`}
								</div>
							</div>
							<FormStatus
								mode={props.gameData.win === 0 ? "error" : "default"}
								header={
									props.gameData.win === 0 ? "Вы проиграли" : "Ваш выигрыш"
								}
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
									{props.gameData.win !== 0 && (
										<span
											style={{
												marginLeft: 4,
												color:
													props.gameData.win === 0
														? "rgba(244, 67, 54, .6)"
														: "white",
											}}
										>
											(x{round((100 / state.v) * 0.95, 2).toFixed(2)})
										</span>
									)}
								</div>
							</FormStatus>
						</Fragment>
					)}
					{props.gameData.state === 1 && (
						<KeybordBets setState={setState} state={state} {...props} />
					)}
					{props.gameData.state === 3 && (
						<div
							onClick={() => props.continue()}
							className={"button"}
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
							}}
						>
							<Icon24DoneOutline style={{ marginRight: 5 }} />
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
											{user.win === 1 ? user.v + "%" : ""}
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
				style={{
					lineHeight: 0,
					marginRight: 20,
					marginLeft: 20,
					marginTop: 5,
				}}
			>
				<div
					onClick={() => props.setState((v) => ({ ...v, t: 0 }))}
					style={{
						display: "inline-block",
						width: "calc(50% - 5px)",
						border: 0,
						color: "var(--bw_color_text_lite)",
						borderRadius: 12,
						padding: "10px 0",
						textAlign: "center",
						fontSize: 18,
						lineHeight: "normal",
						overflow: "hidden",
						background: "var(--events_card_color_bg)",
						marginLeft: 0,
						background:
							props.state.t === 0
								? "#3f51b5"
								: "var(--color_background_buttons)",
						color: "#fff",
						marginRight: 5,
						transition: "background-color .4s ease",
					}}
				>
					<div>Меньше</div>
					<div
						style={{
							paddingTop: 4,
							fontSize: 14,
							fontWeight: 200,
						}}
					>
						1 - {props.number_format(9999 + props.state.v * 10000 - 10000)}
					</div>
				</div>
				<div
					onClick={() => props.setState((v) => ({ ...v, t: 1 }))}
					style={{
						display: "inline-block",
						width: "calc(50% - 5px)",
						border: 0,
						color: "var(--bw_color_text_lite)",
						borderRadius: 12,
						padding: "10px 0",
						textAlign: "center",
						fontSize: 18,
						lineHeight: "normal",
						overflow: "hidden",
						background: "var(--events_card_color_bg)",
						marginLeft: 0,
						background:
							props.state.t === 1
								? "#3f51b5"
								: "var(--color_background_buttons)",
						color: "#fff",
						marginLeft: 5,
						transition: "background-color .4s ease",
					}}
				>
					<div>Больше</div>
					<div
						style={{
							paddingTop: 4,
							fontSize: 14,
							fontWeight: 200,
						}}
					>
						{props.number_format(990000 - props.state.v * 10000 + 10000)} - 999
						999
					</div>
				</div>
			</div>
			<div
				onClick={() => props.bet(props.state)}
				className={"button"}
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
				}}
			>
				<Icon24DoneOutline style={{ marginRight: 5 }} />
				Поставить
			</div>
		</Fragment>
	);
};
export default Nvuti;
