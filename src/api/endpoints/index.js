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
  storeData(data) {
    return resource.post(`${endpoint.index.list}`);
  },
  updateData(id, data) {
    return resource.put(`${endpoint.index.list}`);
  },
  deleteData(id, data) {
    return resource.delete(`${endpoint.index.list}`);
  },
};

export default methods;
