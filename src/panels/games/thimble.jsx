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
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon24DoneOutline,
	Icon56DiamondOutline,
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
				onClick={() => props.bet()}
				className="button"
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
					marginRight: 20,
					marginLeft: 20,
					marginTop: 10,
					marginBottom: 10,
				}}
			>
				<Icon24DoneOutline style={{ marginRight: 5 }} />
				Поставить
			</div>
		</Fragment>
	);
};
const Thimbles = (props) => {
	return (
		<Fragment>
			<div
				onClick={
					props.gameData.state === 2
						? props.gameData.open.find((x) => x === props.item)
							? null
							: () => props.open(props.item)
						: null
				}
				style={{
					display: "inline-block",
					width: "calc(33.3333% - 10px)",
					maxWidth: 200,
					position: "relative",
					marginTop: 20,
					marginLeft: 5,
					marginRight: 5,
				}}
			>
				<img
					src={props.thimbleGreyImg}
					style={{
						width: "100%",
						zIndex: 0,
						opacity:
							props.gameData.open[props.item] === props.item ||
							props.gameData?.res === props.item ||
							props.gameData.state === 3
								? 0.1
								: 0,
						transition: "all 0.1s linear 0s",
						position: "absolute",
						top: 0,
						left: 0,
					}}
				/>
				<img
					src={props.thimbleImg}
					style={{
						width: "100%",
						position: "relative",
						zIndex: 2,
						opacity:
							props.gameData.open[props.item] === props.item ||
							props.gameData?.res === props.item ||
							props.gameData.state === 3
								? 0
								: 1,
						transition: "all 0.5s linear 0s",
						...(props.gameData.open[props.item] === props.item ||
						props.gameData?.res === props.item ||
						props.gameData.state === 3
							? {
									transform: "translateY(-20px)",
							  }
							: null),
					}}
				/>
				<img
					src={props.coinsImg}
					style={{
						width: "50%",
						position: "absolute",
						bottom: 3,
						left: 0,
						right: 0,
						margin: "0px auto",
						zIndex: 1,
						opacity: props.gameData?.res === props.item ? 1 : 0,
						transition: "all 0.1s linear 0s",
					}}
				/>
			</div>
		</Fragment>
	);
};
const Thimble = (props) => {
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
				Thimble
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
			{props.loading === 0 && props.gameData?.game === "thimble" && (
				<Fragment>
					<div
						style={{
							marginLeft: 20,
							marginRight: 20,
							background: "var(--color_background_buttons)",
							borderRadius: "var(--radius_button)",
							width: "calc(100% - 40px)",
							marginTop: 10,
						}}
					>
						{props.gameData.state === 1 && (
							<div
								style={{
									padding: "40px 10px",
									textAlign: "center",
									color: "#1abc9c",
								}}
							>
								<Icon56DiamondOutline
									width={66}
									height={66}
									style={{
										display: "inline-block",
									}}
								/>
								<div
									style={{
										fontSize: 27,
										fontWeight: 300,
									}}
								>
									Ваша ставка?
								</div>
							</div>
						)}
						{props.gameData.state >= 2 && (
							<div
								style={{
									padding: "6px 10px 20px",
									textAlign: "center",
								}}
							>
								<Thimbles item={0} {...props} />
								<Thimbles item={1} {...props} />
								<Thimbles item={2} {...props} />
								<Thimbles item={3} {...props} />
								<Thimbles item={4} {...props} />
							</div>
						)}
					</div>
					{props.gameData.state === 1 && <KeybordBets {...props} />}
					{props.gameData.state >= 2 && (
						<div
							style={{
								marginRight: 20,
								marginLeft: 20,
							}}
						>
							<FormStatus
								mode={props.gameData.win === 0 ? "error" : "default"}
								header={
									props.gameData.open.filter((x) => x === -1).length === 5
										? "Где спрятан приз?"
										: props.gameData.state === 3
										? props.gameData.win === 0
											? "Вы проиграли"
											: "Вы выиграли"
										: "Попробуйте еще раз"
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
									{props.gameData.open.filter((x) => x === -1).length === 5 ? (
										"Выберите один из пяти стаканчиков"
									) : props.gameData.state === 3 ? (
										`${props.number_format(
											props.gameData.win != 0
												? props.gameData.win
												: props.gameData.bet
										)}`
									) : (
										<span>
											{`Будет списано и добавлено к текущей ставке: ${props.number_format(
												props.gameData.win
											)}`}
											<Icon28CoinsOutline
												width={16}
												height={16}
												className="vkIcon"
											/>
										</span>
									)}
									{props.gameData.state === 3 && (
										<span
											style={{
												color:
													props.gameData.win === 0
														? "rgba(244, 67, 54, .6)"
														: "white",
												display: "flex",
												justifyContent: "center",
											}}
										>
											<Icon28CoinsOutline
												width={16}
												height={16}
												style={{ marginRight: 4 }}
												className="vkIcon"
											/>
										</span>
									)}
									{props.gameData.state === 3 && props.gameData.win !== 0 && (
										<span
											style={{
												color:
													props.gameData.win === 0
														? "rgba(244, 67, 54, .6)"
														: "white",
												display: "flex",
												justifyContent: "center",
											}}
										>
											(x
											{props.gameData.open.filter((x) => x === -1).length === 4
												? 4.5
												: props.gameData.open.filter((x) => x === -1).length ===
												  3
												? 2
												: props.gameData.open.filter((x) => x === -1).length ===
												  2
												? 0.95
												: null}
											)
										</span>
									)}
								</div>
							</FormStatus>
						</div>
					)}
					{props.gameData.state === 1 &&
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
											{user.coef ? "x" + user.coef : ""}
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
					{props.gameData.state === 2 &&
						props.gameData.open.filter((x) => x === -1).length < 5 && (
							<div
								onClick={() => props.get()}
								style={{
									background: "#e64646",
									borderRadius: "var(--radius_button)",
									width: "calc(100% - 60px)",
									marginLeft: 20,
									marginRight: 20,
									marginTop: 10,
									justifyContent: "center",
									fontSize: 17,
									fontWeight: 500,
									display: "flex",
									alignItems: "center",
								}}
							>
								<Icon28CoinsOutline
									width={24}
									height={24}
									style={{
										marginRight: 8,
									}}
									className="vkIcon"
								/>
								<div
									style={{
										padding: 11,
										paddingLeft: 0,
									}}
								>
									Закончить
								</div>
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
								background: "#4986cc",
								marginRight: 20,
								marginLeft: 20,
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
					{props.gameData.state >= 0 && (
						<Footer
							style={{ marginTop: 5, color: "GrayText", marginBottom: 5 }}
						>
							Hash: {props.gameData.hash}
						</Footer>
					)}
					{props.gameData.state === 3 && (
						<Footer style={{ color: "GrayText", marginBottom: 10 }}>
							Md5: {props.gameData.md5}
						</Footer>
					)}
				</Fragment>
			)}
		</Panel>
	);
};
export default Thimble;

// 4.5 // 2 // 0.95
