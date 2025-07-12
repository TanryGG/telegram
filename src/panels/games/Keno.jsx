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
	Icon28RefreshOutline,
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
					props.kenoItems.items.length === 0
						? null
						: () => props.bet(props.kenoItems)
				}
				className={props.kenoItems.items.length === 0 ? null : "button"}
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
			<div
				onClick={
					props.kenoItems.items.length === 0 ? null : () => props.resetOpen()
				}
				className={props.kenoItems.items.length === 0 ? null : "button"}
				style={{
					background: "var(--color_background_buttons)",
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
				<Icon28RefreshOutline style={{ marginLeft: 5 }} />
				Сбросить
			</div>
		</Fragment>
	);
};
const LineKeno = (props) => {
	const ItemKeno = () => {
		var items = [];
		for (var i = 0; i < 5; i++) {
			items.push(
				<div
					className={`button itemKeno ${
						props.gameData.state === 3
							? props.kenoItems.items.find(
									(x) => x === props.lineID * 5 + (i + 1)
							  )
								? props.gameData.fields[props.lineID * 5 + i] === true
									? "win"
									: "zero"
								: ""
							: props.kenoItems.items.find(
									(x) => x === props.lineID * 5 + (i + 1)
							  )
							? "w"
							: "c"
					}`}
					onClick={(v) =>
						props.kenoOpen(props.lineID, Number(v.currentTarget.dataset.item))
					}
					data-item={i}
				>
					{props.gameData.state === 1 && (
						<div
							style={{
								fontWeight: 500,
								fontSize: 21,
								transition: "all .2s linear",
							}}
						>
							{props.lineID * 5 + (i + 1)}
						</div>
					)}
					{props.gameData.state === 3 &&
						!props.kenoItems.items.find(
							(x) => x === props.lineID * 5 + (i + 1)
						) &&
						props.gameData.fields[props.lineID * 5 + i] === true && (
							<div
								style={{
									color: "#2196f3",
								}}
							>
								<Icon28CoinsOutline />
							</div>
						)}
					{props.gameData.state === 3 &&
						props.kenoItems.items.find(
							(x) => x === props.lineID * 5 + (i + 1)
						) &&
						props.gameData.fields[props.lineID * 5 + i] === true && (
							<div
								style={{
									color: "white",
								}}
							>
								<Icon28CoinsOutline />
							</div>
						)}
					{props.gameData.state === 3 &&
						props.kenoItems.items.find(
							(x) => x === props.lineID * 5 + (i + 1)
						) &&
						props.gameData.fields[props.lineID * 5 + i] === false && (
							<div
								style={{
									color: "white",
									fontSize: 21,
									fontWeight: 500,
								}}
							>
								{props.lineID * 5 + (i + 1)}
							</div>
						)}
					{props.gameData.state === 3 &&
						!props.kenoItems.items.find(
							(x) => x === props.lineID * 5 + (i + 1)
						) &&
						props.gameData.fields[props.lineID * 5 + i] === false && (
							<div
								style={{
									color: "rgba(255,255,255,.2)",
									fontSize: 21,
									fontWeight: 500,
								}}
							>
								{props.lineID * 5 + (i + 1)}
							</div>
						)}
				</div>
			);
		}
		return items;
	};
	return (
		<div>
			<ItemKeno />
		</div>
	);
};
const Keno = (props) => {
	const kenoOpen = (i, j) => {
		if (props.gameData.state === 3) return;
		if (props.kenoItems.items.find((x) => x === i * 5 + (j + 1))) {
			var data = props.kenoItems;
			data.items.splice(
				props.kenoItems.items.findIndex((x) => x === i * 5 + (j + 1)),
				1
			);
			props.setKenoItems({
				items: data.items,
			});
		} else {
			var data = props.kenoItems;
			if (data.items.length > 9) return;
			data.items.push(i * 5 + (j + 1));
			props.setKenoItems({
				items: data.items,
			});
		}
	};
	const resetOpen = () => {
		if (props.gameData.state === 3) return;
		props.setKenoItems({
			items: [],
		});
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
				Keno
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
							background: "var(--color_background_buttons)",
							marginRight: 20,
							marginLeft: 20,
							width: "calc(100% - 40px)",
							marginTop: 10,
							borderRadius: "var(--radius_button)",
						}}
					>
						<div
							style={{
								padding: "10px 8px",
							}}
						>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={0}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={1}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={2}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={3}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={4}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={5}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={6}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
							<LineKeno
								kenoOpen={kenoOpen}
								lineID={7}
								kenoItems={props.kenoItems}
								gameData={props.gameData}
							/>
						</div>
						{props.kenoItems.items.length === 0 && (
							<div
								style={{
									textAlign: "center",
									lineHeight: "50px",
									color: "var(--bw_color_text_lite)",
									opacity: 0.5,
									fontSize: 18,
									fontWeight: 500,
									textTransform: "uppercase",
									paddingBottom: 10,
								}}
							>
								Выберите несколько ячеек
							</div>
						)}
						{props.kenoItems.items.length > 0 && (
							<HorizontalScroll>
								<div
									style={{
										whiteSpace: "nowrap",
										paddingLeft: 10,
										marginBottom: 10,
									}}
								>
									{getCoefs[props.kenoItems.items.length - 1].map((x, i) => {
										return (
											<div
												style={{
													display: "inline-block",
													minWidth: 60,
													padding: "5px 10px",
													background:
														props.gameData.state == 3
															? props.kenoItems.items.filter((y, j) => {
																	if (props.gameData.fields[y - 1] === true) {
																		return y;
																	}
															  }).length -
																	i >
															  0
																? "#2196f3"
																: "var(--color_background_buttons_dark)"
															: "var(--color_background_buttons_dark)",
													borderRadius: 12,
													marginRight: 8,
													color: "var(--bw_color_text_lite)",
												}}
											>
												<div
													style={{
														opacity: 0.5,
														fontWeight: 300,
														fontSize: 12,
													}}
												>
													{i + 1} Hit
												</div>
												<div
													style={{
														fontWeight: 500,
														fontSize: 18,
													}}
												>
													x{bea_format(x)}
												</div>
											</div>
										);
									})}
								</div>
							</HorizontalScroll>
						)}
					</div>
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
										(x
										{bea_format(
											getCoefs[props.kenoItems.items.length - 1][
												props.kenoItems.items.filter((y, j) => {
													if (props.gameData.fields[y - 1] === true) {
														return y;
													}
												}).length - 1
											]
										)}
										)
									</span>
								)}
							</div>
						</FormStatus>
					)}
					{props.gameData.state === 1 && (
						<KeybordBets resetOpen={resetOpen} {...props} />
					)}
					{props.gameData.state === 3 && (
						<div
							onClick={
								props.kenoItems.items.length === 0
									? null
									: () => props.continue()
							}
							className={props.kenoItems.items.length === 0 ? null : "button"}
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
					{props.gameData.state <= 2 && (
						<Footer
							style={{ marginTop: 5, color: "GrayText", marginBottom: 10 }}
						>
							Hash: {props.gameData.hash}
						</Footer>
					)}
					{props.gameData.state === 3 && (
						<Fragment>
							<Footer style={{ margin: 0, marginTop: 5, color: "GrayText" }}>
								Hash: {props.gameData.hash}
							</Footer>
							<Footer
								style={{ marginTop: 5, color: "GrayText", marginBottom: 10 }}
							>
								Md5: {props.gameData.md5}
							</Footer>
						</Fragment>
					)}
					{props.gameData.state <= 2 &&
						props.gameData.history.map((user) => {
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
												borderRadius: "var(--radius_button)",
												minWidth: 50,
												fontSize: 17,
												fontWeight: 500,
												padding: 5,
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color:
													user.win === 1
														? "#1AB095"
														: user.win === 2
														? "#E74C3C"
														: "",
											}}
										>
											<div
												style={{
													padding: 10,
													borderRadius: 12,
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												x{user.coef}
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
		</Panel>
	);
};
const getCoefs = [
	[3.8],
	[1.7, 5.2],
	[0, 2.7, 48],
	[0, 1.7, 10, 84],
	[0, 1.4, 4, 14, 290],
	[0, 0, 3, 9, 160, 720],
	[0, 0, 2, 7, 30, 280, 800],
	[0, 0, 2, 4, 10, 50, 300, 850],
	[0, 0, 2.5, 4.5, 12, 60, 320, 900],
	[0, 0, 1.5, 2, 4, 6, 22, 80, 400, 1000],
];
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
export default Keno;
