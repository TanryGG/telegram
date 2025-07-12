import {
	useState,
	useEffect,
	Fragment
} from 'react';
import {
	Panel,
	ConfigProvider,
	PanelHeader,
	Cell,
	Avatar,
	Link,
	SimpleCell
} from '@vkontakte/vkui';
import {
	Icon28ChevronBack,
	Icon28UserIncomingOutline,
	Icon28CoinsOutline
} from '@vkontakte/icons';
const ViewClanInfo = props => {
	return (
		<ConfigProvider platform='ios'>
			<Panel id={props.id}>
				<PanelHeader left={<Icon28ChevronBack style={{ paddingLeft: 10 }} fill="#2979FF" onClick={() => window.history.back()}/>}>Команда</PanelHeader>
				{props.loading === 0 && <div style={{
					paddingLeft: 20,
					paddingRight: 20,
					paddingTop: 20
				}}>
					<Cell style={{
						background: "var(--color_background_buttons)",
						borderRadius: "var(--radius_button)"
					}} disabled before={
						<Avatar src={props.clanInfo.data.avatar} />
					}>
						<div>
							<div style={{
								fontSize: 16,
								overflow: "hidden",
								textOverflow: "ellipsis"
							}}>{props.clanInfo.data.name}</div>
							<div style={{
								color: "#818c99",
								color: "var(--text_secondary)",
								marginTop: 2,
								overflow: "hidden",
								textOverflow: "ellipsis",
								fontSize: 13,
								lineHeight: "15px"
							}}>#{props.clanInfo.data.position} в рейтинге</div>
						</div>
					</Cell>
					<div style={{
						padding: 10,
						marginTop: 10,
						background: "var(--color_background_buttons)",
						borderRadius: "var(--radius_button)"
					}}>
						<div style={{
							fontSize: 13,
							color: "#818c99",
							marginBottom: 5
						}}>ОПИСАНИЕ</div>
						<div>{props.clanInfo.data.description}</div>
					</div>
					<Cell style={{
						background: "var(--color_background_buttons)",
						borderRadius: "var(--radius_button)",
						marginTop: 10
					}} disabled before={
						<Icon28UserIncomingOutline />
					}>
						<div data-cid={props.clanInfo.data.id} onClick={(value) => props.invRequest(Number(value.currentTarget.dataset.cid))} style={{
							fontSize: 16,
							overflow: "hidden",
							textOverflow: "ellipsis"
						}}>Присоединиться к команде</div>
					</Cell>
					<div>
						<div style={{
							color: "#818c99",
							color: "var(--text_secondary)",
							marginTop: 2,
							overflow: "hidden",
							textOverflow: "ellipsis",
							fontSize: 13,
							lineHeight: "15px"
						}}>Состав команды</div>
						{props.clanInfo.data.ratingList.map((user, i) => {
							return (<SimpleCell style={{ color: 'white', marginTop: 5, background: "var(--color_background_buttons)", borderRadius: "var(--radius_button)" }} disabled before={<table className="table"><tr><td><div className="ratingPosition">{i + 1}</div></td><td style={{position: 'relative',  display: 'flex'}}><Link style={{ borderRadius: "25%", cursor: "default", marginRight: 7 }} hasHover={false} href={'https://vk.com/id'+user.uid} target='_blank'><Avatar style={{borderRadius: "25%"}} size={42} src={user.photo} /></Link></td></tr></table>} subtitle={
								<div>
									{props.number_format(user.score, false)}
									<Icon28CoinsOutline width={16} height={16} className="vkIcon" />
								</div>}>
								<div style={{
									color: user.color ? user.color : 'white'
								}}>{user.nick ? user.nick : '@'+user.user}
								</div>
							</SimpleCell>);
						})}
					</div>
				</div>}
			</Panel>
		</ConfigProvider>
	);
}
export default ViewClanInfo;