<template>
  <div class="max-height-page" style="background-color: #f0f0f0">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-10 col-10 mt-5">
          <div class="row">
            <div class="col-12">
              <h6 class="text-right">آدرس ها و مشخصات</h6>
            </div>
            <div class="col-12">
              <Loading :loading="loading" />
            </div>
            <div class="col-12 main-table">
              <div class="row">
                <div
                  v-for="(item, index) in dataList"
                  :key="index + 'list-address'"
                  class="col-12 main-box mt-3"
                >
                  <div class="row">
                    <div class="col-lg-4 col-12 mt-3">
                      <div class="row">
                        <div class="col-12">
                          <h6 class="text-right text-muted">نام</h6>
                        </div>
                        <div class="col-12">
                          <h6 class="text-right text-black font-weight-bold">
                            {{ item.first_name }}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mt-3">
                      <div class="row">
                        <div class="col-12">
                          <h6 class="text-right text-muted">نام خانوادگی</h6>
                        </div>
                        <div class="col-12">
                          <h6 class="text-right text-black font-weight-bold">
                            {{ item.last_name }}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mt-3">
                      <div class="row">
                        <div class="col-12">
                          <h6 class="text-right text-muted">
                            شماره تلفن همراه
                          </h6>
                        </div>
                        <div class="col-12">
                          <h6 class="text-right text-black font-weight-bold">
                            {{ item.coordinate_mobile }}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mt-3">
                      <div class="row">
                        <div class="col-12">
                          <h6 class="text-right text-muted">شماره تلفن ثابت</h6>
                        </div>
                        <div class="col-12">
                          <h6 class="text-right text-black font-weight-bold">
                            {{ item.coordinate_phone_number }}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mt-3">
                      <div class="row">
                        <div class="col-12">
                          <h6 class="text-right text-muted">جنسیت</h6>
                        </div>
                        <div class="col-12">
                          <h6 class="text-right text-black font-weight-bold">
                            <span v-if="item.gender === 'male'"> آقا</span>
                            <span v-if="item.gender === 'female'"> خانم</span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-12 mt-3">
                      <div class="row">
                        <div class="col-12">
                          <h6 class="text-right text-muted">آدرس</h6>
                        </div>
                        <div class="col-12">
                          <h6 class="text-right text-black font-weight-bold">
                            {{ item.address }}
                          </h6>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="col-12">
                  <PrTableListSlot
                    :listLengh="dataList.length"
                    search="دنبال چی میگردی ... "
                    :loading="loading"
                    title="list"
                    :columns="['ردیف', ' عنوان آدرس', 'توضیحات آدرس', 'عملیات']"
                  >
                    <tr
                      v-for="(item, index) in dataList"
                      :key="index + 'list-address'"
                    >
                      <td class="text-dark">{{ index + 1 }}</td>
                      <td class="text-dark">
                        {{ item.title }}
                      </td>
                      <td class="text-dark">
                        {{ item.body }}
                      </td>
                      <td>
                        <p
                          class="text-center text-dark mb-0 d-flex justify-content-center"
                        >
                          <router-link
                            class=""
                            :to="{
                              name: 'Address-Edit',
                              params: { id: item.id },
                            }"
                          >
                            ویرایش
                            <i class="dropdown-item-icon bi bi-pencil"></i>
                          </router-link>
                        </p>
                      </td>
                    </tr>
                  </PrTableListSlot>
                </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PrTableListSlot from "@/components/PrTableListSlot.vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    PrTableListSlot,
    Loading,
  },
  data() {
    return {
      dataList: [],
      loading: false,
    };
  },
  methods: {
    async getData() {
      this.loading = true;
      let url = "/address";
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .get(url, config)
        .then((response) => {
          const serverRespone = response.data;
          this.dataList = serverRespone.reverse();
          this.loading = false;
        })
        .catch((error) => {});
    },
  },
  async mounted() {
    await this.getData();
  },
};
</script>
<style scoped>
.main-box {
  background-color: white !important;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 6px -4px 12px -6px lightgray;
  min-height: 15rem;
}
.max-height-page {
  max-height: 92vh;
  min-height: 92vh;
  overflow: hidden;
}

.main-table {
  height: 80vh;
  overflow: auto;
}

.main-table::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for Firefox */
.main-table {
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Internet Explorer and Edge */
.main-table {
  -ms-overflow-style: none; /* IE and Edge */
}
</style>
