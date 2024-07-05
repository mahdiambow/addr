<template>
  <input
    v-if="searchShow"
    type="text"
    id="search-in-data"
    class="form-control mt-2 mb-2"
    :placeholder="search"
  />
  <div class="table-responsive mt-4">
    <table
      v-if="listLengh > 0"
      class="table table-thead-bordered table-nowrap table-text-center table-align-middle card-table"
    >
      <thead class="thead-light">
        <tr>
          <th v-for="(item, index) in columns" :key="index + '-table-indexsd'">
            {{ item }}
          </th>
        </tr>
      </thead>

      <tbody id="data-list-ul">
        <slot></slot>
      </tbody>
    </table>
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <label v-if="loading" class="w-100 mt-2" style="text-align: center" for="">
      لطفا منتظر بمانید
    </label>

    <div v-if="!loading && listLengh == 0" class="w-100">
      <div
        style="
          width: 100%;
          height: 90px;
          background-image: url('/assets/png/12.png');
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        "
      ></div>
      <label class="w-100 mt-2" style="text-align: center" for="">
        اطلاعاتی وجود ندارد
      </label>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br /><br />
    <br />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: {
    search: {
      type: String,
      default: "",
    },
    listLengh: {
      type: Number,
      default: 0,
    },
    loading: {
      type: Boolean,
      default: false,
    },

    searchShow: {
      type: Boolean,
      default: true,
    },
    myId: {
      type: Number,
      default: 0,
    },
    uniqueId: {
      type: Number,
      default: 0,
    },
    rows: {
      type: Array,
      default: ["|", "|"],
    },
    columns: {
      type: Array,
      default: [
        [".", "."],
        ["..", ".."],
      ],
    },
  },

  mounted() {
    $(document).ready(function () {
      $("#search-in-data").on("keyup", function () {
        console.log("search-in-data");
        let value = $(this).val().toLowerCase();
        $("#data-list-ul tr ").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
      });
    });
  },
};
</script>

<style  scoped>
</style>