import { lrc } from "./data";
let lrcData;
export const useParseLrc = () => {
  const resolveLrcData = lrc.split("\n");
  let result = [];
  resolveLrcData.forEach((v) => {
    const parts = v.split("]");
    result.push({
      time: parseTime(parts[0].substring(1)),
      words: parts[1],
    });
  });
  const _data = result.filter((v) => v.words != undefined);
  lrcData = _data;
  window.lrcData = _data;
  return _data;
};

const parseTime = (timeStr) => {
  const parts = timeStr.split(":");
  return +parts[0] * 60 + +parts[1];
};

export const doms = () => {
  return {
    audo: document.querySelector("audio"),
    ul: document.querySelector(".audoContainer ul"),
    container: document.querySelector(".container"),
  };
};

export const findTargetIndex = () => {
  const curTime = doms().audo.currentTime;
  for (let i = 0; i < lrcData.length; i++) {
    if (curTime < lrcData[i].time) {
      return i - 1;
    }
  }
  // 若没找到则是最后一句
  return lrcData.length - 1;
};

export const useCreateLrcElement = () => {
  let framg = document.createDocumentFragment();
  for (let i = 0; i < lrcData.length; i++) {
    const li = document.createElement("li");
    li.textContent = lrcData[i].words;
    framg.appendChild(li);
  }
  doms().ul.appendChild(framg);
};

export const getComputedDom = () => {
  const containerHeight = doms().container.clientHeight;
  const liHeight = doms().ul.children[0].clientHeight;
  return {
    containerHeight,
    liHeight,
  };
};

// todo
export const setOfffset = () => {
  const index = findTargetIndex();
  const offset =
    getComputedDom().liHeight * index +
    getComputedDom().liHeight / 2 -
    getComputedDom().containerHeight / 2;
  const h1 = getComputedDom().liHeight * index + getComputedDom().liHeight / 2;
  doms().ul.style.transform = `translateY(-${offset}px)`;
  doms().ul.children[index].classList.add("active");
};
