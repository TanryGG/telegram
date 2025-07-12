import React, { Fragment, useEffect } from "react";
import "../css/home.css";
import { WebApp } from '@twa-dev/sdk';
import {
  Avatar,
  Button,
  Card,
  CardGrid,
  Div,
  Footer,
  Group,
  List,
  Placeholder,
  SimpleCell,
  Tabs,
  TabsItem
} from "@vkontakte/vkui";
import {
  Icon28CoinsOutline,
  Icon56GiftOutline,
  Icon28UserCircleOutline,
  Icon28MenuOutline,
  Icon28PollSquareOutline,
  Icon28GameOutline,
  Icon28LocationOutline,
  Icon28Messages,
  Icon28LogoVkOutline,
  Icon28AddOutline,
  Icon28GlobeOutline,
  Icon20StarsFilled,
  Icon56GestureOutline
} from "@vkontakte/icons";

const Home = (props) => {
  // Инициализация Telegram WebApp
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  // Функция для отправки данных в бота
  const sendDataToBot = (data) => {
    WebApp.sendData(JSON.stringify(data));
    WebApp.close();
  };

  // Форматирование чисел (оставлено оригинальное)
  const number_format = (number, decimals, dec_point, thousands_sep) => {
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
  };

  const lil_format = (number) => {
    if (number < 1000) return number;
    if (number > 999 && number < 1000000) return (number / 1000).toFixed(0) + "K";
    if (number > 999999 && number < 1000000000) return (number / 1000000).toFixed(1) + "KK";
    if (number > 999999999) return (number / 1000000000).toFixed(1) + "KKK";
  };

  // Обработчик для кнопки "Добавить в сообщество"
  const handleAddToCommunity = () => {
    WebApp.showAlert("Функция добавления в сообщество заменена на Telegram-специфичную");
    // Альтернатива для Telegram:
    // WebApp.openTelegramLink('https://t.me/your_bot?startgroup=start');
  };

  return (
    <div className="tg-app-container">
      {props.screen === "home" && (
        <Fragment>
          <div className="tg-header">
            <Avatar
              style={{ borderRadius: "25%", marginLeft: 10 }}
              size={36}
              src={props.fetchedUser?.photo_200}
            />
            <span className="tg-header-title">Профиль</span>
          </div>

          {props.loading === 0 && (
            <Fragment>
              <div className="tg-balance-banner">
                Резерв бота: {number_format(props.userData.balanceBot)} Cazis
              </div>

              <CardGrid className="tg-card-grid">
                <Card className="tg-balance-card">
                  <div className="tg-balance-content">
                    <div className="tg-balance-title">Ваш счет:</div>
                    <div className="tg-balance-amount">
                      {number_format(props.userData.coins)}
                      <Icon28CoinsOutline width={40} height={40} />
                    </div>
                  </div>
                </Card>

                <div className="tg-action-buttons">
                  <Button 
                    size="l" 
                    className="tg-action-button"
                    onClick={props.openBuyModal}
                  >
                    Пополнить
                  </Button>
                  <Button 
                    size="l" 
                    className="tg-action-button"
                    onClick={props.openSellModal}
                  >
                    Вывести
                  </Button>
                </div>

                {props.userData.bonus.isActive && (
                  <Card className="tg-bonus-card" onClick={props.getBonus}>
                    <div className="tg-bonus-content">
                      <Icon56GiftOutline width={70} height={70} />
                      <div className="tg-bonus-text">БОНУС</div>
                    </div>
                  </Card>
                )}

                {/* Блок статистики за день */}
                <Card className="tg-stats-card">
                  <div className="tg-stats-header">Статистика за день</div>
                  <div className="tg-stats-content">
                    <div className="tg-stat-block win">
                      <div className="tg-stat-title">Выигрыши</div>
                      <div className="tg-stat-value">{props.userData.stats.day.win}</div>
                    </div>
                    <div className="tg-stat-block lose">
                      <div className="tg-stat-title">Проигрыши</div>
                      <div className="tg-stat-value">{props.userData.stats.day.lose}</div>
                    </div>
                  </div>
                </Card>

                {/* Блок статистики за все время */}
                <Card className="tg-stats-card">
                  <div className="tg-stats-header">За всё время</div>
                  <div className="tg-stats-content">
                    <div className="tg-stat-block win">
                      <div className="tg-stat-title">Выигрыши</div>
                      <div className="tg-stat-value">{props.userData.stats.all.win}</div>
                    </div>
                    <div className="tg-stat-block lose">
                      <div className="tg-stat-title">Проигрыши</div>
                      <div className="tg-stat-value">{props.userData.stats.all.lose}</div>
                    </div>
                  </div>
                </Card>
              </CardGrid>

              <div className="tg-footer">
                Онлайн: {props.userData.online}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}

      {props.screen === "rating" && (
        <Fragment>
          <div className="tg-header">
            <Icon28PollSquareOutline style={{ marginLeft: 10 }} width={36} height={36} />
            <span className="tg-header-title">Рейтинг</span>
          </div>

          <Tabs className="tg-tabs">
            <TabsItem
              selected={props.activeTabRating === "topDay"}
              onClick={() => props.setActiveTabRating("topDay")}
            >
              Топ дня
            </TabsItem>
            <TabsItem
              selected={props.activeTabRating === "topWeek"}
              onClick={() => props.setActiveTabRating("topWeek")}
            >
              Топ недели
            </TabsItem>
          </Tabs>

          {props.activeTabRating === "topDay" && (
            <Fragment>
              <Card className="tg-rating-info-card">
                <div className="tg-rating-info-content">
                  <Icon20StarsFilled width={28} height={28} />
                  <div className="tg-rating-info-title">Топ дня</div>
                  <div className="tg-rating-info-description">
                    Каждый день в 0:00 мы разыгрываем{' '}
                    <span className="highlight">
                      {lil_format(props.topSumDay.reduce((acc, x) => acc + x, 0))} Cazis
                    </span>{' '}
                    среди топ-{props.topSumDay.length} лучших игроков.
                  </div>
                  <div className="tg-rating-info-footer">
                    <div className="tg-rating-info-time">
                      <div>ВЫДАЧА ПРИЗОВ</div>
                      <div className="time-value">в 0:00</div>
                    </div>
                    <div className="tg-rating-info-separator"></div>
                    <div className="tg-rating-info-prize">
                      <div>НАГРАДА</div>
                      <div className="prize-value">
                        {lil_format(props.topSumDay.reduce((acc, x) => acc + x, 0))} Cazis
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <List className="tg-rating-list">
                {props.getTop.day.rating.map((user, i) => (
                  <div key={user.id + "topDay"} className="tg-rating-item">
                    <div className="tg-rating-position">{i + 1}</div>
                    <Avatar size={44} src={user.photo} className="tg-rating-avatar" />
                    <div className="tg-rating-user-info">
                      <div className="tg-rating-user-name" style={{ color: user.color || 'white' }}>
                        {user.nick || `@${user.id}`}
                      </div>
                      <div className="tg-rating-user-score">
                        {number_format(user.value)} Coin
                      </div>
                    </div>
                    <div className="tg-rating-prize">
                      <div className="tg-prize-label">ПОЛУЧИТ</div>
                      <div className="tg-prize-value">
                        {lil_format(props.topSumDay?.[i] ?? 0)}
                      </div>
                    </div>
                  </div>
                ))}
              </List>
            </Fragment>
          )}

          {props.activeTabRating === "topWeek" && (
            <Fragment>
              <Card className="tg-rating-info-card">
                <div className="tg-rating-info-content">
                  <Icon28GlobeOutline width={28} height={28} />
                  <div className="tg-rating-info-title">Топ недели</div>
                  <div className="tg-rating-info-description">
                    Каждую неделю в ночь с воскресенья на понедельник мы разыгрываем{' '}
                    <span className="highlight">
                      {lil_format(props.topSumWeek.reduce((acc, x) => acc + x, 0))} Cazis
                    </span>{' '}
                    среди топ-{props.topSumWeek.length} лучших игроков.
                  </div>
                  <div className="tg-rating-info-footer">
                    <div className="tg-rating-info-time">
                      <div>ВЫДАЧА ПРИЗОВ</div>
                      <div className="time-value">воскр. 23:59</div>
                    </div>
                    <div className="tg-rating-info-separator"></div>
                    <div className="tg-rating-info-prize">
                      <div>НАГРАДА</div>
                      <div className="prize-value">
                        {lil_format(props.topSumWeek.reduce((acc, x) => acc + x, 0))} Cazis
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <List className="tg-rating-list">
                {props.getTop.week.rating.map((user, i) => (
                  <div key={user.id + "topWeek"} className="tg-rating-item">
                    <div className="tg-rating-position">{i + 1}</div>
                    <Avatar size={44} src={user.photo} className="tg-rating-avatar" />
                    <div className="tg-rating-user-info">
                      <div className="tg-rating-user-name" style={{ color: user.color || 'white' }}>
                        {user.nick || `@${user.id}`}
                      </div>
                      <div className="tg-rating-user-score">
                        {number_format(user.value)} Coin
                      </div>
                    </div>
                    {i <= 9 && (
                      <div className="tg-rating-prize">
                        <div className="tg-prize-label">ПОЛУЧИТ</div>
                        <div className="tg-prize-value">
                          {lil_format(props.topSumWeek?.[i] ?? 0)}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </List>
            </Fragment>
          )}
        </Fragment>
      )}

      {props.screen === "games" && (
        <Fragment>
          <div className="tg-header">
            <Icon28GameOutline style={{ marginLeft: 10 }} width={36} height={36} />
            <span className="tg-header-title">Игры</span>
          </div>

          <Group className="tg-games-group">
            <CardGrid className="tg-games-grid">
              {[
                { id: "wheel", name: "Wheel", img: props.wheelLabelImg },
                { id: "b7s", name: "Под 7 Над", img: props.b7sLabelImg },
                { id: "dice", name: "Dice", img: props.diceLabelImg },
                { id: "mines", name: "Mines", img: props.minesLabelImg },
                { id: "dream", name: "Dream", img: props.dreamLabelImg },
                { id: "tower", name: "Tower", img: props.towerLabelImg },
                { id: "thimble", name: "Thimble", img: props.thimbleLabelImg },
                { id: "double", name: "Double", img: props.doubleLabelImg },
                { id: "alcoslots", name: "AlcoSlots", img: props.alcoslotsLabelImg },
                { id: "goldwest", name: "GoldWest", img: props.goldWestLabelImg },
              ].map((game) => (
                <Card 
                  key={game.id}
                  className="tg-game-card"
                  onClick={() => props.play(game.id)}
                >
                  <div 
                    className="tg-game-image" 
                    style={{ backgroundImage: `url(${game.img})` }}
                  />
                  <div className="tg-game-name">{game.name}</div>
                </Card>
              ))}
            </CardGrid>
          </Group>
        </Fragment>
      )}

      {props.screen === "other" && (
        <Fragment>
          <div className="tg-header">
            <Icon28MenuOutline style={{ marginLeft: 10 }} width={36} height={36} />
            <span className="tg-header-title">Ещё</span>
          </div>

          <Div className="tg-other-content">
            <SimpleCell
              className="tg-other-item"
              onClick={handleAddToCommunity}
              before={<Icon28AddOutline fill="#F39C12" />}
            >
              Добавить в группу
            </SimpleCell>

            <SimpleCell
              className="tg-other-item"
              href="https://t.me/your_group"
              target="_blank"
              before={<Icon28LogoVkOutline fill="#3498DB" />}
            >
              Наша группа
            </SimpleCell>

            <SimpleCell
              className="tg-other-item"
              href="https://t.me/your_chat"
              target="_blank"
              before={<Icon28Messages fill="#1ABC9C" />}
            >
              Чат игроков
            </SimpleCell>
          </Div>
        </Fragment>
      )}

      {/* Нижнее меню навигации */}
      <div className="tg-bottom-nav">
        <Button 
          mode="plain" 
          className={`tg-nav-button ${props.screen === "home" ? "active" : ""}`}
          onClick={() => props.changeScreen("home")}
          before={<Icon28UserCircleOutline />}
        >
          Профиль
        </Button>
        <Button 
          mode="plain" 
          className={`tg-nav-button ${props.screen === "games" ? "active" : ""}`}
          onClick={() => props.changeScreen("games")}
          before={<Icon28GameOutline />}
        >
          Игры
        </Button>
        <Button 
          mode="plain" 
          className={`tg-nav-button ${props.screen === "rating" ? "active" : ""}`}
          onClick={() => props.changeScreen("rating")}
          before={<Icon28PollSquareOutline />}
        >
          Рейтинг
        </Button>
        <Button 
          mode="plain" 
          className={`tg-nav-button ${props.screen === "other" ? "active" : ""}`}
          onClick={() => props.changeScreen("other")}
          before={<Icon28MenuOutline />}
        >
          Ещё
        </Button>
      </div>
    </div>
  );
};

export default Home;
