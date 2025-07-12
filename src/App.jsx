import "@vkontakte/vkui/dist/vkui.css";
import io from "socket.io-client";
import { Fragment, useEffect, useState } from "react";
import "./css/global.css";
import { isMobile } from "react-device-detect";
import {
  AdaptivityProvider,
  AppRoot,
  ScreenSpinner,
  View,
  Snackbar,
  Alert,
  ModalRoot,
  ModalPage,
  FormItem,
  Input,
  Div,
  Button,
  ModalPageHeader,
  PanelHeaderClose,
  ConfigProvider,
  SplitCol,
  SplitLayout,
  Link
} from "@vkontakte/vkui";
import Home from "./panels/Home.jsx";
import {
  Icon48WritebarDone,
  Icon24Cancel,
  Icon28TagOutline,
} from "@vkontakte/icons";
import Wheel from "./panels/games/wheel.jsx";
import B7s from "./panels/games/b7s.jsx";
import ViewClanInfo from "./panels/ViewClanInfo.jsx";
import Dice from "./panels/games/dice.jsx";
import ErrorView from "./panels/ErrorView.jsx";
import ratingLabelImg from "./panels/img/rating.png";
import wheelLabelImg from "./panels/img/wheel.jpg";
import b7sLabelImg from "./panels/img/dice.jpg";
import diceLabelImg from "./panels/img/dice1.jpg";
import ballImg from "./panels/img/ball_img.png";
import wheelImg from "./panels/img/wheel_img.png";
import topDayImg from "./panels/img/top.png";
import promoButtonImg from "./panels/img/promo.png";
import Mines from "./panels/games/mines.jsx";
import Double from "./panels/games/double.jsx";
import minesLabelImg from "./panels/img/mines.jpg";
import Dream from "./panels/games/dream.jsx";
import dreamLabelImg from "./panels/img/dreamCatcher.jpg";
import doubleLabelImg from "./panels/img/double.jpg";
import towerLabelImg from "./panels/img/tower.jpg";
import crashLabelImg from "./panels/img/crash.jpg";
import Tower from "./panels/games/tower.jsx";
import Crash from "./panels/games/crash.jsx";
import Thimble from "./panels/games/thimble.jsx";
import thimbleLabelImg from "./panels/img/thimble.jpg";
import thimbleImg from "./panels/img/thimble_img.png";
import thimbleGreyImg from "./panels/img/thimble-grey_img.png";
import coinsImg from "./panels/img/coins.png";
import dreamWheel from "./panels/img/dream.svg";
import dreamPoint from "./panels/img/dreamPoint.svg";
import alcoslotsLabelImg from "./panels/img/alcoSlots.jpg";
import AlcoSlots from "./panels/games/AlcoSlots.jsx";
import GoldWest from "./panels/games/GoldWest.jsx";
import goldWestLabelImg from "./panels/img/goldWest.jpg";
import Nvuti from "./panels/games/nvuti.jsx";
import nvutiLabelImg from "./panels/img/nvuti.jpg";
import Keno from "./panels/games/Keno.jsx";
import kenoLabelImg from "./panels/img/keno.jpg";

const App = () => {
  const [activity, setActivity] = useState("home");
  const [amountSell, setAmountSell] = useState(0);
  const [getTopSumDay, setTopSumDay] = useState([]);
  const [getTopSumWeek, setTopSumWeek] = useState([]);
  const [screen, setScreen] = useState("home");
  const [modal, setModal] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="medium" />);
  const [userData, setUserData] = useState({});
  const [fetchedUser, setUser] = useState(null);
  const [loading, setLoading] = useState(1);
  const [isLoad, setLoad] = useState(false);
  const [snackBar, setSnackBar] = useState(null);
  const [getTop, setTop] = useState(null);
  const [activeTabClans, setActiveTabClans] = useState("topClans");
  const [gameData, setGameData] = useState(null);
  const [gameSum, setGameSum] = useState(0);
  const [gameToken, setGameToken] = useState(null);
  const [errorData, setErrorData] = useState(null);
  const [kenoItems, setKenoItems] = useState({ items: [] });
  const [errorInputGame, setErrorInputGame] = useState({
    error: false,
    dssc: "",
  });
  const [promostatus, setPromoStatus] = useState({
    error: false,
    desc: "",
  });
  const [sellStatus, setSellError] = useState({
    error: false,
    desc: ""
  });
  const [connectToWs, setConnectToWs] = useState(false);
  const [getSumBets, setSumBets] = useState(0);
  const [getWinnerSum, setWinnerSum] = useState(0);
  const [getTotalSum, setTotalSum] = useState({
    num: 0,
    str: "",
  });
  const [state, setState] = useState({
    getLastProv: new Date().getTime(),
    getLastProvBool: false,
    bombs: 5,
    gameData: {
      bombs: 5,
      game: "",
    },
    token: "",
    uid: 0,
    cur: 0,
    graph: [],
  });

  const kenoOpen = (i, j) => {
    const data = kenoItems;
    data.array[i][j] = data.array[i][j] === -1 ? i * 5 + (j + 1) : -1;
    data.unix = new Date().getTime();
    setKenoItems({
      array: data.items,
    });
  };

  const [visualdata, setvisualdata] = useState([[]]);
  const [getBombs, setBombs] = useState(5);
  const [promoName, setPromoName] = useState("");
  const [activeTabRating, setActiveTabRating] = useState("topDay");
  const [myClanData, setMyClanData] = useState(null);
  const [clanInfo, setClanInfo] = useState(null);
  
  const rednum = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  
  const balldeg = [
    182, 42, 242, 162, 222, 364, 281, 121, 337, 442, 355, 318, 501, 299, 422,
    562, 384, 260, 461, 212, 412, 232, 91, 346, 374, 251, 171, 290, 490, 471,
    327, 432, 552, 392, 631, 511, 309,
  ];
  
  const games = [
    "WHEEL", "B7S", "DICE", "DICE2", "DICE3", "MINES", "DREAM", "DOUBLE", 
    "TOWER", "THIMBLE", "ALCOSLOTS", "GOLDWEST", "NVUTI", "KENO"
  ];
  
  const domain = "play.vortex-online.online:4444";

  useEffect(() => {
    async function run() {
      window.addEventListener("popstate", (e) => {
        e.preventDefault();
        if (window?.socket?.connected) window?.socket?.disconnect();
        setActivity("home");
        window.history.pushState({ activity: "home" }, `home`);
        setErrorInputGame({ error: false });
      });
      
      window.history.pushState({ activity: "home" }, `home`);
      
      // Инициализация пользователя Telegram
      const tgWebApp = window.Telegram?.WebApp;
      if (tgWebApp) {
        const tgUser = tgWebApp.initDataUnsafe?.user || {};
        const user = {
          id: tgUser.id,
          first_name: tgUser.first_name || 'Пользователь',
          last_name: tgUser.last_name || '',
          photo_100: '',
          photo_200: ''
        };
        
        setUser(user);
        const j = { ...state, uid: user.id };
        setState(j);
        
        await sendRequest("POST", "getUser", user).then((data) => {
          setUserData(data.userData);
        });
        
        setPopout(null);
        setLoading(0);
      }
    }
    run();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        state.token != "" &&
        state.uid != 0 &&
        state.getLastProvBool &&
        state.bombs != state.gameData.bombs &&
        (state.gameData.game === "mines" ||
          state.gameData.game === "tower" ||
          state.gameData.game === "goldwest")
      ) {
        const j = state;
        j.getLastProvBool = false;
        setState(j);
        window.socket.emit(`message`, {
          a: "setBombs",
          bombs: state.bombs,
          token: state.token,
          type: "action",
          user: state.uid,
        });
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [state.bombs, state.gameData.bombs]);

  useEffect(() => {
    setPromoName("");
    setPromoStatus({
      error: false,
      dssc: "",
    });
  }, [modal]);

  function refreshData() {
    setLoad(true);
    setTimeout(async () => {
      await sendRequest("POST", "getUser", fetchedUser).then((data) => {
        setUserData(data.userData);
        setLoad(false);
        setPopout(null);
      });
    }, 200);
  }

  function openHashCheck(data) {
    setPopout(
      <Alert
        style={{
          margin: 0,
          padding: 0,
        }}
        actions={[
          {
            title: "Скопировать",
            autoClose: true,
            mode: "cancel",
            action: () => {
              navigator.clipboard.writeText(data.md5);
            },
          },
          {
            title: "Отмена",
            autoClose: true,
            mode: "destructive",
          },
        ]}
        actionsLayout="horizontal"
        onClose={() => setPopout(null)}
        text={
          <div
            style={{
              padding: 16,
              paddingTop: 19,
              paddingBottom: 20,
              fontSize: 13,
              lineHeight: "16px",
            }}
          >
            <h2
              style={{
                margin: 7,
                fontSize: 21,
                lineHeight: "22px",
              }}
            >
              Хеш игры
            </h2>
            <p>
              Результат игры: <b>{data.num}</b>
            </p>
            <p>
              Строка для проверки: <b>{data.md5}</b>
            </p>
            <p>
              Хеш результата: <b>{data.hash}</b>
            </p>
            <p>
              Для проверки скопируйте строку и вставьте на любом сайте для
              хешировния по технологии md5 (например{" "}
              <a
                style={{
                  color: "var(--accent)",
                  textDecoration: "none",
                }}
                href="https://decodeit.ru/md5"
                className="Link Link--ios"
              >
                тут
              </a>
              ). Если полученный хеш совпадает с указанным в этом окне, то игра
              была честной.
            </p>
          </div>
        }
      />
    );
  }

  async function openClanInfo(id) {
    setLoading(1);
    setPopout(<ScreenSpinner size="medium" />);
    sendRequest("POST", "clans", fetchedUser, {
      a: "getClanInfo",
      id: id,
    }).then((data) => {
      setLoading(0);
      setPopout(null);
      setClanInfo(data);
      setActivity("viewClanInfo");
    });
  }

  function play(game) {
    if (connectToWs) {
      window?.socket?.disconnect();
      setConnectToWs(false);
    }
    game = game.toUpperCase();
    if (games.find((x) => x === game)) {
      if (game === "WHEEL") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "B7S") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "DICE") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "DICE2") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "DICE3") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "MINES") {
        setBombss(5);
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "DREAM") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "DOUBLE") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "TOWER") {
        setBombss(2);
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "CRASH") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "THIMBLE") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "ALCOSLOTS") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "GOLDWEST") {
        setBombss(1);
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "NVUTI") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
      if (game === "KENO") {
        setConnectToWs(true);
        connect(game.toLowerCase());
      }
    }
  }

  function showError(data) {
    setErrorData(data);
    setActivity("error");
    setPopout(null);
  }

  function connect(game) {
    let ws = window.socket;
    if (!ws) {
      ws = {
        disconnected: true,
      };
    }
    if (ws.disconnected) {
      ws = io(`wss://${domain}`, {
        secure: true,
        transports: ["websocket"],
        query: {
          params: JSON.stringify({
            photo: {
              _100: fetchedUser.photo_100,
              _200: fetchedUser.photo_200,
            },
            nick: {
              first: fetchedUser.first_name,
              last: fetchedUser.last_name,
            },
            referer: window.location.href,
            uid: fetchedUser.id,
          }),
        },
      });
      window.socket = ws;
      ws.on("connect", async () => {
        console.log("Connected!");
        ws.emit("message", {
          game,
          referer: window.location.href,
          type: "init",
          user: fetchedUser.id,
        });
      });
      ws.on("disconnect", (info) => {
        setConnectToWs(false);
        console.log(info);
        if (info.match(/^transport close$/i)) {
          return showError({
            desc: "Вы были отключены от сервера!",
            button: {
              back: true,
              event: () => {
                connect(game);
              },
              text: "Переподключиться",
              backEvent: () => {
                setActivity("home");
              },
            },
          });
        }
        console.log("Disconnected!");
      });
      ws.on(`exit`, () => {
        ws.disconnect();
        return showError({
          desc: "Вы были отключены от игры от бездействия в течении 5 минут!",
          button: {
            back: true,
            backEvent: () => {
              setActivity("home");
            },
            event: () => {
              connect(game);
            },
            text: "Переподключиться",
          },
        });
      });
      events(ws, game);
    } else {
      window?.socket?.disconnect();
      connect(game);
    }
  }

  function events(ws, game) {
    ws.on("message", async (msg) => {
      if (msg.type === "init") {
        if (msg.status) {
          const j = state;
          j.token = msg.token;
          j.gameData.game = game;
          setState(j);
          setGameToken(msg.token);
          ws.emit("message", {
            room: msg.roomId,
            token: msg.token,
            type: "join",
            user: fetchedUser.id,
            game,
          });
          setActivity(game);
        } else {
          return showError({
            desc: "Вы уже зашли с другого устройства!",
            button: {
              back: true,
              backEvent: () => {
                setActivity("home");
              },
              event: () => {
                connect(game);
              },
              text: "Попробовать снова",
            },
          });
        }
      } else if (msg.type === "update") {
        startGraphAnimator(msg);
        if (
          msg.state === 1 &&
          (msg.game === "mines" ||
            msg.game === "tower" ||
            msg.game === "goldwest")
        ) {
          const j = state;
          j.gameData.bombs = msg.bombs;
          j.getLastProvBool = true;
          j.getLastProv = new Date().getTime();
          j.gameData.game = msg.game;
          setState(j);
        }
        if (msg?.balance) {
          setUserData((v) => ({ ...v, coins: msg.balance.coins }));
        }
        setGameData(msg);
        setLoading(0);
        if (
          msg.state === 2 &&
          msg.game !== "mines" &&
          msg.game !== "tower" &&
          msg.game !== "thimble" &&
          msg.game !== "goldwest"
        ) {
          getTatals(msg);
        }
      } else if (msg.type === "setBet") {
        if (msg.status) {
          setUserData((data) => ({
            ...data,
            coins: msg.private.balance.coins,
          }));
        } else {
          if (msg.desc) {
            setErrorInputGame({
              error: true,
              desc: msg.desc,
            });
          }
        }
      } else if (msg.type === "requestCall") {
        if (msg.a === "getUser") {
          await sendRequest("POST", "getUser", fetchedUser).then((data) => {
            setUserData(data.userData);
          });
        }
      }
    });
    ws.on(`error`, async (msg) => {
      if (msg.type === "join") {
        return showError({
          desc: "Вы уже зашли с другого аккаунта!",
          button: {
            back: true,
            backEvent: () => {
              refreshData();
              setActivity("home");
              setPopout(<ScreenSpinner size="medium" />);
              setLoading(0);
            },
            event: () => {
              connect(game);
            },
            text: "Попробовать снова",
          },
        });
      }
    });
  }

  function refreshTop() {
    setLoad(true);
    setTimeout(async () => {
      await sendRequest("POST", "getTop", fetchedUser)
        .then(async (data) => {
          setTop(data.data);
          setTopSumDay(data?.data?.day?.topsum ?? []);
          setTopSumWeek(data?.data?.week?.topsum ?? []);
          setLoad(false);
          setLoading(0);
          setPopout(null);
        })
        .catch((err) => console.error(err));
    }, 200);
  }

  function setBombss(v) {
    const j = state;
    j.bombs = v;
    j.getLastProv = new Date().getTime();
    j.getLastProvBool = true;
    setState(j);
    setBombs(v);
  }

  const changeScreen = async (e) => {
    setErrorInputGame({
      error: false,
    });
    if (window.socket?.connected) {
      window.socket.disconnect();
    }
    setScreen(e);
    if (userData.ban) {
      setLoading(0);
      setPopout(null);
      setActivity("error");
      setModal(null);
      return;
    }
    
    if (e == "rating" || e == "clans") {
      setPopout(<ScreenSpinner size="medium" />);
      setLoading(1);
      await sendRequest("POST", "getTop", fetchedUser)
        .then(async (data) => {
          setTop(data.data);
          setTopSumDay(data?.data?.day?.topsum ?? []);
          setTopSumWeek(data?.data?.week?.topsum ?? []);
          setLoading(0);
          
          if (e === "clans" && activeTabClans === "myClan" && userData.clan) {
            sendRequest("POST", "clans", fetchedUser, { a: "get" }).then(
              (dataC) => {
                setMyClanData(dataC);
                setPopout(null);
              }
            );
          } else {
            setPopout(null);
          }
        })
        .catch((err) => console.error(err));
    }
    if (e == "home") {
      setPopout(<ScreenSpinner size="medium" />);
      await sendRequest("POST", "getUser", fetchedUser).then((data) => {
        setUserData(data.userData);
        setPopout(null);
      });
    }
  };

  function sendRequest(method, query, user, dataQuery) {
    return new Promise(function (resolve, reject) {
      const url = `https://${domain}/capi`;
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          xhr.onerror = () => {
            console.error("ggerhrhyrt");
            return showError({
              desc: "Произошла ошибка на стороне сервера!",
              button: {
                back: false,
                backEvent: () => {},
                event: async () => {
                  setActivity("home");
                  setPopout(<ScreenSpinner size="medium" />);
                  setLoading(1);
                  await sendRequest("POST", "getUser", user).then((data) => {
                    setUserData(data.userData);
                    setLoad(false);
                    setPopout(null);
                    setLoading(0);
                  });
                },
                text: "Попробовать снова",
              },
            });
          };
          xhr.onload = () => {
            resolve(JSON.parse(xhr.responseText));
          };
        }
      };
      const data = {
        data: dataQuery ? dataQuery : {},
        query,
        referer: window.location.href,
        uid: user.id,
      };
      xhr.send(JSON.stringify(data));
    });
  }

  function getTatals(data) {
    let res = 0;
    let res1 = 0;
    let res2 = 0;
    let res3 = "";
    let res33 = 0;
    data.bets.filter((x) => {
      if (x.user === fetchedUser.id) {
        res += x.defsum;
        if (x.win === 1) {
          res1 += x.sum;
        }
      }
    });
    res2 = res1 - res;
    res33 =
      res2 <= 0 ? `${res2}`.replace(/-/gi, "") : `${res2}`.replace(/-/gi, "");
    res3 = `${res2 < 0 ? "-" : res2 > 0 ? "+" : ""}`;
    setSumBets(res);
    setWinnerSum(res1);
    setTotalSum({
      str: res3,
      num: res33,
    });
  }

  function changesumbybtn(value) {
    setErrorInputGame({
      error: false,
    });
    if (!isNaN(value)) {
      setGameSum(Number(gameSum + value));
    } else if (value === "/2") {
      setGameSum(Number((gameSum / 2).toFixed(2)));
    } else if (value === "*2") {
      setGameSum(Number((gameSum * 2).toFixed(2)));
    }
  }

  function invRequest(value) {
    setPopout(<ScreenSpinner size="medium" />);
    sendRequest("POST", "clans", fetchedUser, {
      a: "invRequest",
      cid: value,
    }).then((x) => {
      setActiveTabClans("myClan");
      setUserData(x.userData);
      setActivity("home");
      setPopout(null);
      changeScreen("clans");
    });
  }

  function openCreateClanLayout() {}

  function openTopDayLayout() {
    setPopout(<ScreenSpinner size="medium" />);
    setLoading(1);
    refreshTop();
    setScreen("rating");
    setActiveTabRating("topDay");
  }

  function changesumgame(value) {
    if (!isNaN(value.replace(/ /gi, "").trim())) {
      setGameSum(Number(value.replace(/ /gi, "").trim()));
      setErrorInputGame({
        error: false,
      });
    }
  }

  function getCoefs(bombs) {
    const e = [];
    for (let a = 1, i = 0; i < 25 - bombs; i++) {
      a *= 1 - bombs / (25 - i);
      const r = Math.floor((0.9 / a) * 100) / 100;
      e.push(r);
    }
    return e;
  }

  function usepromo() {
    setPopout(<ScreenSpinner size="medium" />);
    sendRequest("POST", "actions", fetchedUser, {
      a: "activatePromo",
      promo: promoName,
    }).then((data) => {
      setPopout(null);
      if (data.status === "error") {
        setPromoStatus({
          error: true,
          desc: data.desc,
        });
      } else {
        setModal(null);
        setSnackBar(
          <Snackbar
            style={{ marginBottom: 48, color: "#8BC34A" }}
            onClose={() => setSnackBar(null)}
            before={
              <Icon48WritebarDone width={48} height={48} fill="#8BC34A" />
            }
          >
            Промокод успешно активирован и вы получили +{data.sum} Cazis
          </Snackbar>
        );
      }
    });
  }

  function openPromoModal() {
    setModal("active_promo");
  }

  function openSellModal() {
    setModal("sell_coins");
  }

  function openBuyModal() {
    setModal("buy_coins");
  }

  const getBonus = async () => {
    const res = await sendRequest("POST", "getBonus", fetchedUser);
    if (res.status === "ok") {
      setSnackBar(
        <Snackbar
          style={{ marginBottom: 48, color: "#8BC34A" }}
          onClose={() => setSnackBar(null)}
          before={<Icon48WritebarDone width={48} height={48} fill="#8BC34A" />}
        >
          Бонус успешно получен!
        </Snackbar>
      );
    } else {
      setSnackBar(
        <Snackbar
          style={{ marginBottom: 48, color: "#FF5C5C" }}
          onClose={() => setSnackBar(null)}
          before={<Icon24Cancel width={48} height={48} fill="#FF5C5C" />}
        >
          Ошибка при получении бонуса!
        </Snackbar>
      );
    }
    setUserData(res.userData);
  };

  const startGraphAnimator = (msg) => {
    const y = state;
    let graph = y.graph;
    const a = document.getElementById("crash_textAnim");
    if (msg.type === "update" && msg.game === "crash") {
      if (msg.state === 2) {
        const e = new Date().getTime();
        graph.push([e, msg.cur]), setvisualdata(cloneObj(graph));
        setState(y);
        if (a) {
          a.innerText = "x" + number_format2(msg.cur, 3);
        }
      } else {
        if (msg.state === 3) {
          if (a) {
            a.innerText = "x" + number_format2(msg.cur, 3);
          }
        } else if (msg.state === 1) {
          if (a) {
            a.innerHTML = msg.time;
          }
          const y = state;
          y.graph = [];
          graph = [];
          setState(y);
          const e = new Date().getTime();
          setvisualdata([[e, 1]]);
        } else if (msg.state === 0) {
          const y = state;
          y.graph = [];
          graph = [];
          setState(y);
          const e = new Date().getTime();
          setvisualdata([[e, 1]]);
        }
      }
    }
  };

  const cloneObj = function (t) {
    let a;
    if (null == t || "object" != typeof t) return t;
    if (t instanceof Date) {
      a = new Date();
      a.setTime(t.getTime());
      return a;
    }
    if (t instanceof Array) {
      a = [];
      for (let e = 0, i = t.length; e < i; e++) a[e] = cloneObj(t[e]);
      return a;
    }
    if (t instanceof Object) {
      a = {};
      for (const r in t) {
        if (t.hasOwnProperty(r)) {
          a[r] = cloneObj(t[r]);
        }
      }
      return a;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
  };

  const sellCoins = () => {
    setPopout(<ScreenSpinner size="medium" />);
    sendRequest("POST", "actions", fetchedUser, {
      a: "sellCoins",
      amount: amountSell,
    }).then((data) => {
      setPopout(null);
      if (data.status === "error") {
        setSellError({
          error: true,
          desc: data.desc,
        });
      } else {
        setModal(null);
        setSnackBar(
          <Snackbar
            style={{ marginBottom: 48, color: "#8BC34A" }}
            onClose={() => setSnackBar(null)}
            before={
              <Icon48WritebarDone width={48} height={48} fill="#8BC34A" />
            }
          >
            Успешно!
          </Snackbar>
        );
      }
    });
  };

  const modals = (
    <ModalRoot activeModal={modal}>
      <ModalPage
        id="active_promo"
        dynamicContentHeight
        onClose={() => setModal(null)}
        header={
          <ModalPageHeader
            left={<PanelHeaderClose onClick={() => setModal(null)} />}
          >
            Активация промо
          </ModalPageHeader>
        }
      >
        <Fragment>
          <FormItem
            bottom={promostatus.error === true ? promostatus.desc : null}
            status={promostatus.error === true ? "error" : null}
            top={<span>Введите промокод:</span>}
          >
            <Input
              type="text"
              onChange={(e) => setPromoName(e.currentTarget.value)}
            />
          </FormItem>
          <Div>
            <Button
              before={<Icon28TagOutline width={24} height={24} />}
              onClick={usepromo}
              stretched
              size="l"
            >
              <span style={{ fontWeight: 550 }}>Использовать</span>
            </Button>
          </Div>
        </Fragment>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modals} popout={popout}>
      <SplitCol autoSpaced>
        <View activePanel={activity}>
          <Home
            id="home"
            kenoLabelImg={kenoLabelImg}
            nvutiLabelImg={nvutiLabelImg}
            goldWestLabelImg={goldWestLabelImg}
            alcoslotsLabelImg={alcoslotsLabelImg}
            thimbleLabelImg={thimbleLabelImg}
            crashLabelImg={crashLabelImg}
            towerLabelImg={towerLabelImg}
            doubleLabelImg={doubleLabelImg}
            dreamLabelImg={dreamLabelImg}
            minesLabelImg={minesLabelImg}
            topSumWeek={getTopSumWeek}
            topSumDay={getTopSumDay}
            openPromoModal={openPromoModal}
            promoButtonImg={promoButtonImg}
            activeTabRating={activeTabRating}
            setActiveTabRating={setActiveTabRating}
            openTopDayLayout={openTopDayLayout}
            topDayImg={topDayImg}
            myClanData={myClanData}
            openCreateClanLayout={openCreateClanLayout}
            setActiveTabClans={setActiveTabClans}
            activeTabClans={activeTabClans}
            openClanInfo={openClanInfo}
            diceLabelImg={diceLabelImg}
            ratingLabelImg={ratingLabelImg}
            wheelLabelImg={wheelLabelImg}
            b7sLabelImg={b7sLabelImg}
            screen={screen}
            play={play}
            refreshTop={refreshTop}
            number_format={number_format}
            getTop={getTop}
            snackBar={snackBar}
            fetchedUser={fetchedUser}
            getBonus={getBonus}
            changeScreen={changeScreen}
            refreshData={refreshData}
            isLoad={isLoad}
            userData={userData}
            loading={loading}
          />
          
          {/* Все остальные игровые компоненты остаются без изменений */}
          <Wheel
            id="wheel"
            getSumBets={getSumBets}
            getTotalSum={getTotalSum}
            getWinnerSum={getWinnerSum}
            changesumgame={changesumgame}
            wheelImg={wheelImg}
            ballImg={ballImg}
            openHashCheck={openHashCheck}
            balldeg={balldeg}
            rednum={rednum}
            changesumbybtn={changesumbybtn}
            gameSum={gameSum}
            gameData={gameData}
            number_format={number_format}
            errorInputGame={errorInputGame}
            bet={(value) =>
              window.socket.emit("message", {
                type: "action",
                a: "setBet",
                bet: gameSum,
                user: fetchedUser.id,
                token: gameToken,
                t: value,
              })
            }
            snackBar={snackBar}
            fetchedUser={fetchedUser}
            userData={userData}
            loading={loading}
          />
          
          <B7s
            id="b7s"
            errorInputGame={errorInputGame}
            gameData={gameData}
            number_format={number_format}
            openHashCheck={openHashCheck}
            fetchedUser={fetchedUser}
            userData={userData}
            changesumgame={changesumgame}
            gameSum={gameSum}
            changesumbybtn={changesumbybtn}
            loading={loading}
            snackBar={snackBar}
            bet={(value) =>
              window.socket.emit("message", {
                type: "action",
                a: "setBet",
                bet: gameSum,
                user: fetchedUser.id,
                token: gameToken,
                t: value,
              })
            }
          />
					<Dice
						id="dice"
						play={play}
						getSumBets={getSumBets}
						getTotalSum={getTotalSum}
						getWinnerSum={getWinnerSum}
						errorInputGame={errorInputGame}
						gameData={gameData}
						number_format={number_format}
						openHashCheck={openHashCheck}
						fetchedUser={fetchedUser}
						userData={userData}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						gameSum={gameSum}
						loading={loading}
						snackBar={snackBar}
						bet={(value) =>
							window.socket.emit(`message`, {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								t: value,
							})
						}
					/>
					<Dice
						id="dice2"
						play={play}
						getSumBets={getSumBets}
						getTotalSum={getTotalSum}
						getWinnerSum={getWinnerSum}
						errorInputGame={errorInputGame}
						gameData={gameData}
						number_format={number_format}
						openHashCheck={openHashCheck}
						fetchedUser={fetchedUser}
						userData={userData}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						gameSum={gameSum}
						loading={loading}
						snackBar={snackBar}
						bet={(value) =>
							window.socket.emit(`message`, {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								t: value,
							})
						}
					/>
					<Dice
						id="dice3"
						play={play}
						getSumBets={getSumBets}
						getTotalSum={getTotalSum}
						getWinnerSum={getWinnerSum}
						errorInputGame={errorInputGame}
						gameData={gameData}
						number_format={number_format}
						openHashCheck={openHashCheck}
						fetchedUser={fetchedUser}
						userData={userData}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						gameSum={gameSum}
						loading={loading}
						snackBar={snackBar}
						bet={(value) =>
							window.socket.emit(`message`, {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								t: value,
							})
						}
					/>
					<ErrorView id="error" data={errorData} />
					<ViewClanInfo
						id="viewClanInfo"
						invRequest={invRequest}
						clanInfo={clanInfo}
						number_format={number_format}
						loading={loading}
					/>
					<Mines
						id="mines"
						getCoefs={getCoefs}
						state={state}
						getBombs={getBombs}
						setBombss={setBombss}
						userData={userData}
						number_format={number_format}
						snackBar={snackBar}
						fetchedUser={fetchedUser}
						errorInputGame={errorInputGame}
						gameSum={gameSum}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						openHashCheck={openHashCheck}
						gameData={gameData}
						loading={loading}
						bet={() =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						get={() =>
							window.socket.emit("message", {
								type: "action",
								a: "getBet",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						continue={() =>
							window.socket.emit("message", {
								type: "action",
								a: "continue",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						open={(item) =>
							window.socket.emit("message", {
								type: "action",
								a: "open",
								item,
								user: fetchedUser.id,
								token: gameToken,
							})
						}
					/>
					<Dream
						id="dream"
						dreamWheel={dreamWheel}
						dreamPoint={dreamPoint}
						getSumBets={getSumBets}
						getWinnerSum={getWinnerSum}
						getTotalSum={getTotalSum}
						fetchedUser={fetchedUser}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						bet={(v) =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								t: v,
							})
						}
						gameSum={gameSum}
						errorInputGame={errorInputGame}
						openHashCheck={openHashCheck}
						loading={loading}
						gameData={gameData}
						userData={userData}
						number_format={number_format}
					/>
					<Double
						id="double"
						getSumBets={getSumBets}
						getWinnerSum={getWinnerSum}
						getTotalSum={getTotalSum}
						fetchedUser={fetchedUser}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						bet={(v) =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								t: v,
							})
						}
						gameSum={gameSum}
						errorInputGame={errorInputGame}
						openHashCheck={openHashCheck}
						loading={loading}
						gameData={gameData}
						userData={userData}
						number_format={number_format}
					/>
					<Tower
						id="tower"
						state={state}
						getBombs={getBombs}
						setBombss={setBombss}
						userData={userData}
						number_format={number_format}
						snackBar={snackBar}
						fetchedUser={fetchedUser}
						errorInputGame={errorInputGame}
						gameSum={gameSum}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						openHashCheck={openHashCheck}
						gameData={gameData}
						loading={loading}
						bet={() =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						get={() =>
							window.socket.emit("message", {
								type: "action",
								a: "getBet",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						continue={() =>
							window.socket.emit("message", {
								type: "action",
								a: "continue",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						open={(item) =>
							window.socket.emit("message", {
								type: "action",
								a: "open",
								item,
								user: fetchedUser.id,
								token: gameToken,
							})
						}
					/>
					<Crash
						id="crash"
						get={() =>
							window.socket.emit("message", {
								type: "action",
								a: "getBet",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						bet={() =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						gameSum={gameSum}
						errorInputGame={errorInputGame}
						visualdata={visualdata}
						openHashCheck={openHashCheck}
						setvisualdata={setvisualdata}
						setState={setState}
						state={state}
						number_format={number_format2}
						loading={loading}
						gameData={gameData}
						fetchedUser={fetchedUser}
						userData={userData}
					/>
					<Thimble
						id="thimble"
						continue={() =>
							window.socket.emit("message", {
								type: "action",
								a: "continue",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						coinsImg={coinsImg}
						thimbleGreyImg={thimbleGreyImg}
						thimbleImg={thimbleImg}
						bet={() =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						get={() =>
							window.socket.emit("message", {
								type: "action",
								a: "getBet",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						open={(item) =>
							window.socket.emit("message", {
								type: "action",
								a: "open",
								user: fetchedUser.id,
								token: gameToken,
								item,
							})
						}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						gameSum={gameSum}
						errorInputGame={errorInputGame}
						openHashCheck={openHashCheck}
						number_format={number_format}
						loading={loading}
						gameData={gameData}
						fetchedUser={fetchedUser}
						userData={userData}
					/>
					<AlcoSlots
						id="alcoslots"
						getSumBets={getSumBets}
						getTotalSum={getTotalSum}
						getWinnerSum={getWinnerSum}
						loading={loading}
						gameData={gameData}
						fetchedUser={fetchedUser}
						userData={userData}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						gameSum={gameSum}
						errorInputGame={errorInputGame}
						openHashCheck={openHashCheck}
						number_format={number_format}
						bet={(v) =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								t: v,
							})
						}
					/>
					<GoldWest
						id="goldwest"
						getBombs={getBombs}
						state={state}
						setBombss={setBombss}
						gameData={gameData}
						userData={userData}
						fetchedUser={fetchedUser}
						loading={loading}
						gameSum={gameSum}
						changesumbybtn={changesumbybtn}
						changesumgame={changesumgame}
						errorInputGame={errorInputGame}
						number_format={number_format}
						openHashCheck={openHashCheck}
						bet={() =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						get={() =>
							window.socket.emit("message", {
								type: "action",
								a: "getBet",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
						open={(item) =>
							window.socket.emit("message", {
								type: "action",
								a: "open",
								user: fetchedUser.id,
								token: gameToken,
								item,
							})
						}
						continue={() =>
							window.socket.emit("message", {
								type: "action",
								a: "continue",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
					/>
					<Nvuti
						id="nvuti"
						changesumbybtn={changesumbybtn}
						errorInputGame={errorInputGame}
						number_format={number_format}
						changesumgame={changesumgame}
						gameSum={gameSum}
						userData={userData}
						gameData={gameData}
						fetchedUser={fetchedUser}
						loading={loading}
						bet={(v) =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								...v,
							})
						}
						continue={() =>
							window.socket.emit("message", {
								type: "action",
								a: "continue",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
					/>
					<Keno
						id="keno"
						kenoOpen={kenoOpen}
						setKenoItems={setKenoItems}
						kenoItems={kenoItems}
						changesumbybtn={changesumbybtn}
						errorInputGame={errorInputGame}
						number_format={number_format}
						changesumgame={changesumgame}
						gameSum={gameSum}
						userData={userData}
						gameData={gameData}
						fetchedUser={fetchedUser}
						loading={loading}
						bet={(v) =>
							window.socket.emit("message", {
								type: "action",
								a: "setBet",
								bet: gameSum,
								user: fetchedUser.id,
								token: gameToken,
								...v,
							})
						}
						continue={() =>
							window.socket.emit("message", {
								type: "action",
								a: "continue",
								user: fetchedUser.id,
								token: gameToken,
							})
						}
					/>

          <ErrorView id="error" data={errorData} />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

function number_format(number, decimals, dec_point, thousands_sep) {
  decimals = false;
  let i, j, kw, kd, km;
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
}

function number_format2(number, decimals, dec_point, thousands_sep) {
  let i, j, kw, kd, km;
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
}

export default App;