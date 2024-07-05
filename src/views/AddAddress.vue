<template>
  <div
    class="max-height-page d-flex justify-content-center align-items-center"
    style="background-color: #f0f0f0"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-10 col-10">
              <div class="row">
                <div class="col-12 main-box">
                  <div class="row">
                    <div v-show="firstStep" class="col-12">
                      <div class="row">
                        <div class="col-lg-4 col-12 mt-2 d-flex flex-column">
                          <Input
                            title="عنوان آدرس"
                            v-model="dataItem.first_name"
                            @input="validateFirstName"
                            placeholder="مثال : مهدی"
                          />

                          <span
                            class="text-danger text-right font-weight-bold"
                            v-if="errors.first_name"
                            >{{ errors.first_name }}</span
                          >
                        </div>

                        <div class="col-lg-4 col-12 mt-2 d-flex flex-column">
                          <Input
                            title="نام و نام خانوادگی"
                            v-model="dataItem.last_name"
                            @input="validateLastName"
                            placeholder="مثال : شیخ"
                          />

                          <span
                            class="text-danger text-right font-weight-bold"
                            v-if="errors.last_name"
                            >{{ errors.last_name }}</span
                          >
                        </div>

                        <div class="col-lg-4 col-12 mt-2 d-flex flex-column">
                          <Input
                            title="موبایل"
                            type="number"
                            v-model="dataItem.coordinate_mobile"
                            @input="validateMobile"
                            placeholder="مثال : ۰۹۳۹۳۳۴۱۸۷۳"
                          />

                          <span
                            class="text-danger text-right font-weight-bold"
                            v-if="errors.coordinate_mobile"
                            >{{ errors.coordinate_mobile }}</span
                          >
                        </div>

                        <div class="col-lg-4 col-12 mt-2 d-flex flex-column">
                          <Input
                            title="شماره تلفن ثابت (اختیاری) "
                            type="number"
                            v-model="dataItem.coordinate_phone_number"
                            @input="validatePhone"
                            placeholder="مثال : ۰۹۳۹۳۳۴۱۸۷۳"
                          />

                          <span
                            class="text-danger text-right font-weight-bold"
                            v-if="errors.coordinate_phone_number"
                            >{{ errors.coordinate_phone_number }}</span
                          >
                        </div>
                        <div class="col-lg-8 col-12 mt-2 d-flex flex-column">
                          <Input
                            title="توضیحات آدرس"
                            @input="validateAddress"
                            v-model="dataItem.address"
                          />
                          <span
                            class="text-danger text-right font-weight-bold"
                            v-if="errors.address"
                            >{{ errors.address }}</span
                          >
                        </div>

                        <div class="col-12 mt-4">
                          <div class="row">
                            <div class="col-4">
                              <h6 class="text-right mb-0">جنسیت</h6>
                            </div>
                            <div class="col-8 d-flex">
                              <div class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  v-model="dataItem.gender"
                                  value="female"
                                />
                                <label
                                  class="form-check-label"
                                  for="inlineRadio1"
                                  >خانم</label
                                >
                              </div>
                              <div class="form-check form-check-inline">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  v-model="dataItem.gender"
                                  value="male"
                                />
                                <label
                                  class="form-check-label"
                                  for="inlineRadio2"
                                  >آقا</label
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12"></div>
                      </div>
                    </div>
                    <div v-show="secondStep" class="col-12">
                      <div class="row">
                        <p
                          @click="backtoStep()"
                          class="text-right"
                          style="font-size: 0.9rem; cursor: pointer"
                        >
                          <i class="bi bi-chevron-compact-right"></i>
                          بازگشت
                        </p>

                        <div class="col-12">
                          <h6 class="text-center">
                            موفقیت مکانی خود را انتخاب کنید
                          </h6>
                          <p style="font-size: 0.8rem" class="text-center">
                            ( با کلیک روی نقشه)
                          </p>
                        </div>
                        <div class="col-12">
                          <div id="map"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-bar d-flex justify-content-center align-items-center">
      <ButtonLoading
        v-if="secondStep"
        :showLoading="showLoading"
        text="ثبت و ادامه"
        @click="submitFormApi()"
        class="acharebtn"
      />
      <ButtonLoading
        v-if="firstStep"
        :showLoading="showLoading"
        text="ثبت و ادامه"
        @click="submitForm()"
        class="acharebtn"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Input from "@/components/Input.vue";
import InputTextarea from "@/components/InputTextarea.vue";
import { toastSuccess, toastError } from "@/utils/toast";
import ButtonLoading from "@/components/ButtonLoading.vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

export default {
  components: {
    Input,
    InputTextarea,
    ButtonLoading,
  },

  data() {
    return {
      firstStep: true,
      secondStep: false,
      showLoading: false,
      errorStyle: {
        first_name: false,
        last_name: false,
        coordinate_mobile: false,
        coordinate_phone_number: false,
        address: false,
        gender: false,
      },
      errors: {
        first_name: null,
        last_name: null,
        coordinate_mobile: null,
        coordinate_phone_number: null,
        address: null,
        gender: null,
      },
      id: this.$route.params.id || null,
      dataItem: {
        first_name: "",
        last_name: "",
        coordinate_mobile: "",
        coordinate_phone_number: "",
        address: "",
        region: 1,
        lat: [],
        lng: [],
        gender: "",
      },
    };
  },

  methods: {
    backtoStep() {
      this.secondStep = false;
      this.firstStep = true;
    },
    validateFirstName() {
      this.errors.first_name =
        this.dataItem.first_name.length >= 3
          ? null
          : "نام باید حداقل ۳ حرف باشد.";
      this.errorStyle.first_name = true;
    },
    validateLastName() {
      this.errors.last_name =
        this.dataItem.last_name.length >= 3
          ? null
          : "نام خانوادگی باید حداقل ۳ حرف باشد.";
    },
    validateMobile() {
      const mobileRegex = /^[0-9]{11}$/;
      this.errors.coordinate_mobile = mobileRegex.test(
        this.dataItem.coordinate_mobile
      )
        ? null
        : "تلفن همراه باید ۱۱ رقم باشد.";
    },
    validatePhone() {
      const phoneRegex = /^[0-9]{11}$/;
      this.errors.coordinate_phone_number =
        this.dataItem.coordinate_phone_number.length === 0 ||
        phoneRegex.test(this.dataItem.coordinate_phone_number)
          ? null
          : "تلفن ثابت باید ۱۱ رقم باشد.";
    },
    validateAddress() {
      this.errors.address =
        this.dataItem.address.length >= 10
          ? null
          : "آدرس باید حداقل ۱۰ حرف باشد.";
    },

    submitForm() {
      this.validateFirstName();
      this.validateLastName();
      this.validateMobile();
      this.validatePhone();
      this.validateAddress();
      if (
        !this.errors.first_name &&
        !this.errors.last_name &&
        !this.errors.coordinate_mobile &&
        !this.errors.coordinate_phone_number &&
        !this.errors.address &&
        !this.showLoading
      ) {
        // this.showLoading = true;
        this.firstStep = false;
        this.secondStep = true;
      }
    },
    submitFormApi() {
      if (this.dataItem.lat.length > 0 && this.dataItem.lng.length > 0) {
        this.showLoading = true;
        let url = "/address";

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const data = JSON.stringify(this.dataItem);
        axios
          .post(url, data, config)
          .then((response) => {
            this.showLoading = false;
            const serverResponse = response.data;
            toastSuccess("با موفقیت ثبت شد");
            this.$router.push({ name: "Home" });
          })
          .catch((error) => {
            this.showLoading = false;
            toastError("لطفا مقدار ورودی هارو چک کنید");
          });
      } else {
        toastError("انتخاب لوکیشن اجباری است");
      }
    },
    updateCoordinates(lat, lng) {
      this.dataItem.lat.push(lat);
      this.dataItem.lng.push(lng);
    },

    initialMap() {
      var map = L.map("map").setView([35.698967, 51.337975], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 15,
        minZoom: 5,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      var currentMarker = null;

      const onMapClick = (e) => {
        // If there's already a marker, remove it
        if (currentMarker !== null) {
          map.removeLayer(currentMarker);
        }

        // Add a new marker at the clicked location
        currentMarker = L.marker(e.latlng);
        currentMarker.addTo(map);

        // Update the Vue instance's data properties
        this.updateCoordinates(e.latlng.lat, e.latlng.lng);
      };

      // Attach the click event to the map
      map.on("click", onMapClick);
    },
  },
  mounted() {
    this.initialMap();
  },
};
</script>

<style scoped>
#map {
  height: 20rem;
  width: 100%;
}
.main-box {
  background-color: white !important;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 6px -4px 12px -6px lightgray;
  min-height: 15rem;
}
.max-height-page {
  max-height: 84vh;
  min-height: 84vh;
  overflow: hidden;
}

.bottom-bar {
  max-height: 8vh;
  min-height: 8vh;
  position: fixed;
  background-color: white;
  bottom: 0;
  width: 100%;
}

.borderrd {
  border: 1px solid red !important;
}

.acharebtn {
  border: none;
  width: 35%;
  background-color: #45cab8 !important;
}
</style>
