function find(data) {
    return {
      data: [...data],
      where(conditions) {
        this.data = this.data.filter(item => {
          return Object.entries(conditions).every(([key, condition]) => {
            if (condition instanceof RegExp) {
              return condition.test(item[key]);
            }
            return item[key] === condition;
          });
        });
        return this;
      },
      orderBy(key, order = 'asc') {
        this.data.sort((a, b) => {
          const valA = a[key];
          const valB = b[key];
          if (order === 'desc') {
            return valA < valB ? 1 : valA > valB ? -1 : 0;
          }
          return valA > valB ? 1 : valA < valB ? -1 : 0;
        });
        return this;
      },
      get value() {
        return this.data;
      }
    };
  }
  
  const data = [
    {userId: 8, title: 'title1'},
    {userId: 11, title: 'other'},
    {userId: 15, title: null},
    {userId: 19, title: 'title2'}
  ];
  
  const result = find(data)
    .where({
      "title": /\d$/   // 过滤出title以数字结尾的项
    })
    .orderBy('userId', 'desc');  // 按userId降序排列
  
  console.log(result.value); 
  // 输出: [{ userId: 19, title: 'title2'}, { userId: 8, title: 'title1' }]