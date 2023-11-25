import resource from "../resource";

const endpoint = {
  index: {
    list: "datas",
  },
};

const methods = {
  listData() {
    return resource.get(`${endpoint.index.list}`);
  },
};

export default methods;
