import resource from "../resource";

const endpoint = {
  index: {
    list: "/master-data/user",
  },
};

const methods = {
  listData() {
    return resource.get(`${endpoint.index.list}`);
  },
};

export default methods;
