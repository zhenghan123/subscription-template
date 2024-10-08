import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
    {
      name: '未成年模式',
      key: 0,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="我知道了"]'],
        },
      ],
    },
    {
      name: '点x',
      key: 1,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[name="android.widget.ImageView"]'],
        },
      ],
    },
  ],
});
