<template>
  <el-card>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="primary" @click="handleAddUser">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="state" label="State" />
      <el-table-column prop="city" label="City" />
      <el-table-column label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const tableData = ref([
      {
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
    ]);
    return {
      tableData,
    };
  },
  methods: {
    handleAddUser() {
      // console.log("----------->>>>>");
    },
  },
});
</script>
