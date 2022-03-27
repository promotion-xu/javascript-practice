const template = '{{ user["name"] }}，今天你又学习了吗 - 用户ID: {{ user.id }}';

const data = {
  user: {
    id: 10086,
    name: '山月',
  }
};

//=> "山月，今天你又学习了吗 - 用户ID: 10086"
render(template, data);