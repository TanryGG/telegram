import { useEffect, useState, Fragment } from "react";
import {
	Panel,
	PanelHeader,
	ConfigProvider,
	Card,
	CardGrid,
	HorizontalScroll,
	FormItem,
	Input,
	SimpleCell,
	Avatar,
	Link,
	Footer,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon24DoneOutline,
} from "@vkontakte/icons";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
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
				}}
			>
				<Icon24DoneOutline style={{ marginRight: 5 }} />
				Поставить
			</div>
		</Fragment>
	);
};
const Crash = (props) => {
	const options_1 = {
		plotOptions: {
			spline: {
				animation: true,
				lineWidth: 10,
				marker: { enabled: false },
				showInLegend: false,
				enableMouseTracking: false,
			},
		},
		chart: {
			type: "spline",
			height: "200pt",
			backgroundColor: "var(--color_background_buttons)",
			style: { color: "rgba(255,255,255,.5)" },
		},
		title: null,
		time: { useUTC: false },
		legend: { enabled: false },
		yAxis: {
			type: "spline",
			title: { text: null },
			lineColor: "rgba(255,255,255,.5)",
			tickColor: "rgba(255,255,255,.5)",
			labels: { style: { color: "#fff", font: "11px" } },
		},
		credits: { enabled: false },
		xAxis: {
			type: "datetime",
			data: props.visualdata[0][0],
			labels: { style: { color: "#fff", font: "11px" } },
		},
		tooltip: { pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}" },
		series: [{ data: props.visualdata, lineWidth: 6 }],
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
				Crash
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
			{props.loading == 0 && props.gameData?.game === props.id && (
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
												display: "inline-block",
												borderRadius: "50%",
												marginRight: 8,
												background: "#3f51b5",
												minWidth: 64,
												minHeight: 64,
											}}
										>
											<div
												style={{
													width: "100%",
													height: "100%",
													fontSize: 16,
													textAlign: "center",
													lineHeight: "64px",
													fontWeight: 200,
													verticalAlign: "middle",
													color: "#fff",
												}}
											>
												x{x.result.crash}
											</div>
										</div>
									);
								})}
							</div>
						</HorizontalScroll>
					</div>
					<div
						style={{
							position: "relative",
							overflow: "hidden",
							width: "calc(100% - 40px)",
							textAlign: "left",
							lineHeight: "normal",
							zIndex: 0,
							fontSize: 12,
							marginTop: 10,
							marginLeft: 20,
							marginRight: 20,
							borderRadius: "var(--radius_button)",
						}}
					>
						{props.gameData.state >= 0 && (
							<HighchartsReact highcharts={Highcharts} options={options_1} />
						)}
						{/* {props.gameData.state >= 2 && <CrashRun {...props} />} */}
						{props.gameData.state >= 1 && props.gameData.state != -3 && (
							<div
								id="crash_textAnim"
								style={{
									position: "absolute",
									width: "100%",
									top: 70,
									left: 0,
									right: 0,
									fontSize: 40,
									fontWeight: 700,
									color: props.gameData.state === 3 ? "#f44336" : "white",
									textAlign: "center",
								}}
							></div>
						)}
						{props.gameData.state === -3 && (
							<div
								id="crash_textAnim2"
								style={{
									position: "absolute",
									width: "100%",
									top: 70,
									left: 0,
									right: 0,
									fontSize: 40,
									fontWeight: 700,
									color: "white",
									textAlign: "center",
								}}
							></div>
						)}
					</div>
					{props.gameData.bets.find((x) => x.user === props.fetchedUser.id) && (
						<SimpleCell
							style={{
								marginLeft: 20,
								marginRight: 20,
								color: "white",
								background:
									props.gameData.bets.find(
										(x) => x.user === props.fetchedUser.id
									).win === 1
										? "rgba(26, 176, 149, .1)"
										: props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
										  ).win === 2
										? "rgba(231, 76, 60, .1)"
										: "var(--field_background)",
								marginTop: 10,
							}}
							disabled
							after={
								<div
									style={{
										color:
											props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
											).win === 1
												? "#1AB095"
												: props.gameData.bets.find(
														(x) => x.user === props.fetchedUser.id
												  ).win === 2
												? "#E74C3C"
												: "white",
										padding: 6,
										borderRadius: "25%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: 21,
										fontWeight: 200,
									}}
								>
									{props.gameData.bets.find(
										(x) => x.user === props.fetchedUser.id
									).type === 0
										? "< 7"
										: props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
										  ).type === 1
										? "= 7"
										: props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
										  ).type === 2
										? "> 7"
										: props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
										  ).type}
								</div>
							}
							subtitle={
								<div
									style={{
										color:
											props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
											).win === 1
												? "#1AB095"
												: props.gameData.bets.find(
														(x) => x.user === props.fetchedUser.id
												  ).win === 2
												? "#E74C3C"
												: "",
									}}
								>
									<div>
										{props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
										).win === 1
											? "+"
											: props.gameData.bets.find(
													(x) => x.user === props.fetchedUser.id
											  ).win === 2
											? "-"
											: ""}
										{props.number_format(
											props.gameData.bets.find(
												(x) => x.user === props.fetchedUser.id
											).sum,
											false
										)}
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
									color:
										props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
										).win === 1
											? "#1AB095"
											: props.gameData.bets.find(
													(x) => x.user === props.fetchedUser.id
											  ).win === 2
											? "#E74C3C"
											: "white",
								}}
							>
								{props.gameData.bets.find(
									(x) => x.user === props.fetchedUser.id
								).win === 1
									? "Вы выиграли"
									: props.gameData.bets.find(
											(x) => x.user === props.fetchedUser.id
									  ).win === 2
									? "Вы проиграли"
									: "Ваша ставка"}
							</div>
						</SimpleCell>
					)}
					{props.gameData.state <= 1 &&
						!props.gameData.bets.find(
							(x) => x.user === props.fetchedUser.id
						) && <KeybordBets props={props} />}
					{props.gameData.state === 2 && (
						<div
							onClick={() => props.get()}
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
								marginTop: 10,
								marginLeft: 20,
								marginRight: 20,
							}}
						>
							<Icon24DoneOutline style={{ marginRight: 5 }} />
							Забрать
						</div>
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
											color: Number(user.type) === 1 ? "#8bc34a" : "#3f51b5",
											padding: 6,
											borderRadius: "25%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontSize: 21,
											fontWeight: 200,
										}}
									>
										{user.type === 0
											? "< 7"
											: user.type === 1
											? "= 7"
											: user.type === 2
											? "> 7"
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
								Md5: {props.gameData?.result?.md5}
							</Footer>
						</Fragment>
					)}
				</Fragment>
			)}
		</Panel>
	);
};
export default Crash;

{
	/* <div style={{
						position: "relative",
						overflow: "hidden",
						width: "100%",
						height: "100%",
						textAlign: "left",
						lineHeight: "normal",
						zIndex: 0,
						fontSize: 12
					}}>
						{props.gameData.state >= 0 && <HighchartsReact highcharts={Highcharts} options={options_1} />}
						{/* {props.gameData.state >= 2 && <CrashRun {...props} />} */
}
{
	/*props.gameData.state >= 1 && <div id="crash_textAnim" style={{
							position: 'absolute',
							width: "100%",
							top: 70,
							left: 0,
							right: 0,
							fontSize: 40,
							fontWeight: 700,
							color: 'white',
							textAlign: "center"
						}}>
						</div>}
					</div> */
}
