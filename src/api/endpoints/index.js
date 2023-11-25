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
  detailData(id) {
    return resource.get(`${endpoint.index.list}/${id}`);
  },
  storeData(data) {
    return resource.post(`${endpoint.index.list}`, data);
  },
  updateData(id, data) {
    return resource.put(`${endpoint.index.list}/${id}`, data);
  },
  deleteData(id) {
    return resource.delete(`${endpoint.index.list}/${id}`);
  },
};

export default methods;
