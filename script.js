class LotteryApp {
  constructor() {
    // PARTICIPANT LIST: replace only the names inside this array when the 2026 list arrives.
    this.participants = [
      'Sherrie Wang', 'Steven Yu', 'Aitong Jiang', 'Charles Wei', 'Jia Wang',
'Jia Wang', 'Jiawei He', 'Bing Xue', 'Zhuowei Li', 'Xintong Liu',
'Jun Liu', 'Will Polkinghorn', 'Yinshi Cao', 'Chai Lu', 'Dafei Chen',
'Cheng Chen', 'Xin Du', 'Ally Hu', 'Ruby Jiang', 'Mike Chiang',
'Charles Li', 'Jun Li', 'Shu Wang', 'Lan Yu', 'Wanmei Zhao',
'Suzie Zhao', 'Dora Tao', 'Connie Chan', 'LISHENG WANG', 'Jiantao Jiao',
'Junqiao Wu', 'Reynold Xin', 'Jiajun Wu', 'Kaihua Zhu', 'Li Song',
'Ed Chi', 'Mallun Yen', 'Justin Zhu', 'Lin Qiao', 'Jeff Wang',
'Jiayin Zhang', 'Yu Wang', 'Mandy Lai', 'Lindon Gao', 'Tim Shi',
'RIKA LI', 'Andy Tsao', 'Grace Wang', 'Zhuoliang Song', 'Melody He',
'Fei Meng', 'Dan Zhang', 'William Chen', 'Chris Ma', 'Jack Qin',
'Kevin Li', 'Roger Chen', 'Zixuan Lan', 'Hanyun Xu', 'Sid Sheth',
'Celine Xie', 'Hao Jiang', 'Ci Chu', 'Ty Wang', 'Kathy Zhu',
'Craig Ridgell', 'Franky Yu', 'Nikita Lin', 'Jinpei Li', 'June Yang',
'Jingming Liu', 'Alexis Ji', 'Zheng Bu', 'Hong (Henry) Xue', 'Allen Hu',
'Huajian Wu', 'Huijun Ring', 'Judy He', 'Luke Tang', 'Meng Su',
'Charlene Liao', 'Holly Zheng', 'Joe Chen', 'Kai Chen', 'Jiaxin Pei',
'Chloe Fan', 'zhou yu', 'Ben Pu', 'Ning Mo', 'Charlene Li',
'ShipSage Guest2', 'ShipSage Guest1', 'Barry Chen', 'Nina Liu', 'XiaoNing Sun',
'ChuBing Li', 'Zheng Wang', 'WeiPing Ding', 'Alan Xing', 'Haohua Zhou',
'Henry Wang', 'Amy Huang', 'Miao Hong', 'Tim Xiong', 'Charles Eesley',
'Lijie Zhou', 'Wei Wei', 'Sabrina Jin', 'Claire Gao', 'Zoey Cai',
'Helen He', 'Ellen Wang', 'Liana Li', 'Shaofeng Yang', 'Hui Ju',
'Fengmin Gong', 'xiaofang Liu', 'Joy Chen', 'Minerva Yeung', 'Julia Hsiao, J.D., LL.M.',
'Peter Zhao', 'Sophie Wang', 'May Chen', 'Chen Lu', 'Justin Song',
'Leo Li', 'Tengyu Ma', 'Xiaoliang Qi', 'Yujia Yuan', 'Yating Yao',
'Yan Jiao', 'Fei Guo', 'Xiaofeng Zhang', 'Hang Zhou', 'Ben Wu',
'Alice Zhang', 'Justin Zhu', 'Emily Shen', 'Stephen Lee', 'Shanxiang Qi',
'Xiang Fu', 'Jun Ye', 'Jenny Zhang', 'Xiang Qian', 'Liqun Qiu',
'Wendy Qiao', 'Ellie Chan', 'Thomas Tang', 'Joy Liu', 'Kristy Liu',
'Bobby Wu', 'Peng Li', 'John Hu', 'Erin An', 'Rujian Bai',
'Zee Zhai', 'Thomas Judson', 'Jinsong Guo', 'Alan Ren', 'Deloitte Guest',
'Vivien Wang', 'Hai Su', 'James Chen', 'Charlotte Cheung', 'Gary Wang',
'Sophie Lo', 'Luke Qi', 'Jessica Li', 'Bin-Bin Lin', 'Wenjia Fang',
'Zelong Yin', 'Jon Li', 'Kyla Zhang', 'Xiao Guo', 'Rong Zhou',
'Steven Guan', 'Addison Chi', 'lilly deng', 'Sangmo Kang', 'Hansong Zhang',
'Sally Shi', 'Crystal Li', 'Jason Lin', 'Charles Qi', 'Ye Liu',
'Howie Xu', 'Sarah Pu', 'Lynch Jiang', 'Jing Kuang', 'Christina Doggett',
'Greg Zoll', 'Arvin Sun', 'Richard Xu', 'Vera Zhang', 'Xiaosong Zhou',
'Elvis Wu', 'Xiyue Xiang', 'Bryan Chen', 'Bowie Chen', 'Maggie Song',
'Peter Zhao', 'Shan Shan', 'Ran Hu', 'Yu Yang', 'Ella Li',
'Kai Li', 'Victor Zhou', 'Guorui Su', 'Jackie Xu', 'Hui Zhang',
'W Vincent Xiang', 'Ashley Dai', 'Jennifer Jin', 'Fang Li', 'Le Cong',
'Brian Zhan', 'James Ding', 'Liping Zhu', 'Li Fan', 'Rick Zhuang',
'Tina Shi', 'Juan Wang', 'Ping Wu', 'Kaylee Yang', 'Xinrong Jiang',
'Junwei Bao', 'Haijing B.', 'Jaggie Zhu Appel', 'Haifang Yun', 'Weijie Yun',
'Eugene Zhang', 'Shen Shen', 'Lisa Ye', 'Angie Zeng', 'David Chen',
'Michelle Chen', 'Sophie Ren', 'Tony Chao', 'Yangqing Jia', 'Xingchu Liu',
'Mei Hong', 'Christine Qing', 'Lili Zheng', 'Jiang Lin', 'Patrick Yang',
'Ning Li', 'Cheng Liu', 'Lucy Jin', 'Jake Huang', 'Joe Wong',
'Aibo Tsai', 'Holly Zhu', 'Meagan Pi', 'Hao Min', 'Brad Bao',
'Wenliang Zhao', 'Allen Pan', 'Peng Zou', 'Joanna Z', 'Wendy Zhu',
'Tony Chan', 'Hao Zhong', 'Manchen Hu', 'Liang Tang', '"Stella" Xi JIN',
'Jason Lin', 'Kelvin Chan', 'Tom Chang', 'Sherrill Zhang', 'Frank Fu',
'YAN ZHAO', 'Fiona Ma', 'Lisa Gillmor', 'Sergio Lopez', 'Matthew Hudes',
'Xiaobing Yu', 'Ramine Roane', 'Becker Hao', 'Nick Ni', 'Peng Sun',
'Vicky Chen', 'Pengfei Gao', 'Jack Chueng', 'Harry Feng', 'Bingrui Yang',
'Frank Wu', 'Shan li', 'Wanda Hou', 'Liang Wang', 'Yu heng Wang',
'Qingyun Cao', 'Jack Shi', 'Yan Zhang', 'Wei Wei', 'Jeff Chien',
'Shiyao Wu', 'Sophia Zhang', 'Jacob Cheung', 'Leo Ma', 'Lee Fan',
'Ruifei Qian', 'Bill Jia', 'Cynthia Zeng', 'Echo Cheng', 'Li Chen',
'Sharon Wang' 
    ];
    this.isRunning = false;
    this.animationInterval = null;
    this.currentDisplay = document.getElementById('currentDisplay');
    this.winnersDisplay = document.getElementById('winnersDisplay');
    this.lotteryBtn = document.getElementById('lotteryBtn');
    this.lotteryBtn.addEventListener('click', () => this.isRunning ? this.stopLottery() : this.startLottery());
  }

  startLottery() {
    this.isRunning = true;
    this.lotteryBtn.textContent = 'Stop Lottery';
    this.lotteryBtn.classList.add('running');
    this.currentDisplay.innerHTML = '<span class="spinning">Drawing...</span>';
    this.winnersDisplay.innerHTML = '<span class="placeholder winners-placeholder">Winners will appear here...</span>';
    soundEffects.playLotterySound();
    this.animationInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.participants.length);
      this.currentDisplay.innerHTML = `<span class="spinning">${this.participants[randomIndex]}</span>`;
    }, 100);
    setTimeout(() => { if (this.isRunning) this.stopLottery(); }, 5000);
  }

  stopLottery() {
    this.isRunning = false;
    this.lotteryBtn.textContent = 'Start Lottery';
    this.lotteryBtn.classList.remove('running');
    if (this.animationInterval) clearInterval(this.animationInterval);
    this.animationInterval = null;
    this.currentDisplay.innerHTML = '<div class="congratulations-text">Congratulations!</div>';
    const winners = this.selectWinners(6);
    this.displayWinners(winners);
    setTimeout(createConfetti, 350);
  }

  selectWinners(count) {
    const shuffled = [...this.participants];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }

  displayWinners(winners) {
    this.winnersDisplay.innerHTML = '';
    winners.forEach((winner, index) => {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'winner-item';
        el.innerHTML = `<span class="winner-star">★</span><span class="winner-number">${index + 1}</span><span class="winner-name">${winner}</span>`;
        this.winnersDisplay.appendChild(el);
      }, index * 160);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new LotteryApp());

class SoundEffects {
  constructor() {
    // Same drum audio used by last year's LotteryWeb repository.
    // Keeping the original GitHub-hosted file avoids substituting a different sound.
    this.lotteryAudio = new Audio('sound.mp3');
    this.lotteryAudio.loop = false;
    this.lotteryAudio.volume = 0.7;
  }
  playLotterySound() {
    this.lotteryAudio.currentTime = 0;
    this.lotteryAudio.play().catch(e => console.log('Audio play failed:', e));
  }
}
const soundEffects = new SoundEffects();

function createConfetti() {
  const colors = ['#1168c7', '#1d8cf2', '#d9ad54', '#f4d98f', '#ffffff'];
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      Object.assign(c.style, {position:'fixed', width:'9px', height:'9px', backgroundColor:colors[Math.floor(Math.random()*colors.length)], left:Math.random()*100+'vw', top:'-12px', borderRadius:'50%', pointerEvents:'none', zIndex:'1000', animation:'fall 3s linear forwards'});
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }, i * 12);
  }
}
const style = document.createElement('style');
style.textContent = '@keyframes fall { to { transform: translateY(105vh) rotate(540deg); opacity: 0; } }';
document.head.appendChild(style);
