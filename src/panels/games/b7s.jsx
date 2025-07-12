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
	SimpleCell,
	Link,
	Avatar,
	Footer,
} from "@vkontakte/vkui";
import {
	Icon28ChevronBack,
	Icon28CoinsOutline,
	Icon56RecentOutline,
	Icon24DoneOutline,
} from "@vkontakte/icons";
// import '../../css/globalb7s.css';
const Dice = ({ num }) => {
	return (
		<div>
			{num === 6 && (
				<div class="dice">
					<div class="face one f5">
						<span class="ball"></span>
					</div>
					<div class="face two f1">
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face three f3">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face four f4">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face five f6">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face six f2">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
				</div>
			)}
			{num === 5 && (
				<div class="dice">
					<div class="face one f6">
						<span class="ball"></span>
					</div>
					<div class="face two f5">
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face three f3">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face four f4">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face five f2">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face six f1">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
				</div>
			)}
			{num === 4 && (
				<div className="dice">
					<div className="face one f1">
						<span className="ball"></span>
					</div>
					<div className="face two f3">
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face three f5">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face four f2">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face five f4">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face six f6">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
				</div>
			)}
			{num === 3 && (
				<div className="dice">
					<div className="face one f1">
						<span className="ball"></span>
					</div>
					<div className="face two f4">
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face three f2">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face four f5">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face five f3">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
					<div className="face six f6">
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
						<span className="ball"></span>
					</div>
				</div>
			)}
			{num === 2 && (
				<div class="dice">
					<div class="face one f1">
						<span class="ball"></span>
					</div>
					<div class="face two f2">
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face three f3">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face four f4">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face five f5">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face six f6">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
				</div>
			)}
			{num === 1 && (
				<div class="dice">
					<div class="face one f2">
						<span class="ball"></span>
					</div>
					<div class="face two f6">
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face three f3">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face four f4">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face five f1">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
					<div class="face six f5">
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
						<span class="ball"></span>
					</div>
				</div>
			)}
		</div>
	);
};
const B7S = (props) => {
	const [getSelect, setSelect] = useState(0);
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
				Под 7 Над
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
			{props.gameData?.game === "b7s" && props.loading === 0 && (
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
													x.result.nums[0] + x.result.nums[1] === 7
														? "#8bc34a"
														: "#3f51b5",
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
						className="gameDice"
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
									}}
								>
									{props.gameData.time}
								</div>
							</div>
						)}
						{props.gameData.state === 2 && (
							<div className="gameContent">
								<div className="dicesBlock state3">
									<div className="diceWrapper n1">
										<Dice
											num={
												props.gameData.result.nums[0] - props.gameData.result.r
											}
										/>
									</div>
									<div className="diceWrapper n2">
										<Dice
											num={
												props.gameData.result.nums[1] + props.gameData.result.r
											}
										/>
									</div>
									<div className="resultText">
										{props.gameData.result.nums[0] +
											props.gameData.result.nums[1]}
									</div>
								</div>
							</div>
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
					{props.gameData.state !== 2 &&
						!props.gameData.bets.find(
							(x) => x.user === props.fetchedUser.id
						) && (
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
									style={{
										marginLeft: 20,
										marginRight: 20,
										marginTop: 10,
									}}
								>
									<div
										style={{
											display: "flex",
											width: "100%",
											marginBottom: 10,
											fontSize: 18,
										}}
									>
										<div
											data-bet={0}
											onClick={(value) =>
												setSelect(Number(value.currentTarget.dataset.bet))
											}
											className="button"
											style={{
												background:
													getSelect === 0 ? "#3f51b5" : "rgba(0,0,0,0.1)",
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
											{"<"}
											<b style={{ marginLeft: 5, marginRight: 5 }}>7</b>
											{`(2.3)`}
										</div>
										<div
											data-bet={1}
											onClick={(value) =>
												setSelect(Number(value.currentTarget.dataset.bet))
											}
											className="button"
											style={{
												background:
													getSelect === 1 ? "#8bc34a" : "rgba(0,0,0,0.1)",
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
											{"="}
											<b style={{ marginLeft: 5, marginRight: 5 }}>7</b>
											{`(5.8)`}
										</div>
										<div
											data-bet={2}
											onClick={(value) =>
												setSelect(Number(value.currentTarget.dataset.bet))
											}
											className="button"
											style={{
												background:
													getSelect === 2 ? "#3f51b5" : "rgba(0,0,0,0.1)",
												width: "calc((100% / 3) - 10px)",
												borderRadius: "var(--radius_button)",
												position: "relative",
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
												padding: 10,
											}}
										>
											{">"}
											<b style={{ marginLeft: 5, marginRight: 5 }}>7</b>
											{`(2.3)`}
										</div>
									</div>
									<div
										onClick={() => props.bet(getSelect)}
										className="button"
										style={{
											background: "#4986cc",
											width: "calc(100% - 20px)",
											borderRadius: "var(--radius_button)",
											position: "relative",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											padding: 10,
											fontSize: 17,
											fontWeight: 500,
										}}
									>
										<Icon24DoneOutline style={{ marginRight: 5 }} />
										Поставить
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
					{props.gameData.state <= 1 && (
						<Footer style={{ marginTop: 5, color: "GrayText" }}>
							Hash: {props.gameData.hash}
						</Footer>
					)}
					{props.gameData.state > 1 && (
						<Fragment>
							<Footer style={{ margin: 0, marginTop: 5, color: "GrayText" }}>
								Hash: {props.gameData.hash}
							</Footer>
							<Footer style={{ marginTop: 5, color: "GrayText" }}>
								Md5: {props.gameData.result.md5}
							</Footer>
						</Fragment>
					)}
				</Fragment>
			)}
		</Panel>
	);
};
export default B7S;
