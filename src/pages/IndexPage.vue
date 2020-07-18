
<template>
  <div class="page-wrapper">
    <el-row v-show="!showResult">
      <el-col :offset="3" :span="18" class="flexwrapper">
        <el-upload
          class="uploader"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :http-request="processImage"
          :before-upload="readExif"
          accept=".jpg, .jpeg, .png, .gif, .heic"
          :show-file-list="false"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row v-show="showResult">
      <el-col :offset="3" :span="18">
        <div class="summary" v-if="exifTableData.length > 0 ">
          <div class="summary-text">
            <p>{{ exifTableData.length }} EXIF data are stored in your picture</p>
            <p>User can know that:</p>
            <ul>
              <li v-if="exifData['Make']">This picture is make of: {{ exifData['Make'] }}</li>
              <li v-if="exifData['Model']">Your camera model: {{ exifData['Model'] }}</li>
              <li v-if="exifData['Software']">Your software version: {{ exifData['Software'] }}</li>
              <li
                v-if="exifData['GPSLatitude'] && exifData['GPSLongitude']"
              >This image is taken at location: {{ exifData['GPSLatitude'] + ',' + exifData['GPSLongitude'] }}</li>
            </ul>
            <p>See below table for detail.</p>
          </div>
          <div class="img-wrapper" v-show="showThumbnail">
            <img :src="imageDataUrl" />
          </div>
        </div>
        <el-table :data="exifTableData" border stripe>
          <el-table-column prop="itemName" label="EXIF item name"></el-table-column>
          <el-table-column prop="itemValue" label="EXIF item value"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { findEXIFinHEIC, findEXIFinJPEG } from "../exif-heic";
// import axios from "axios";

export default {
  name: "index-page",
  data() {
    return {
      showThumbnail: false,
      showResult: false,
      imageAddress: "",
      exifTableData: [],
      exifData: null,
      imageDataUrl: ""
    };
  },
  methods: {
    parseGeoInfo(exifData) {
      let result = {
        lat: 0,
        lang: 0
      };
      if (exifData.GPSLatitude && exifData.GPSLatitude.length > 0) {
        result.lat =
          exifData.GPSLatitude[0] +
          exifData.GPSLatitude[1] / 60 +
          exifData.GPSLatitude[2] / 3600;
        if (exifData.GPSLatitudeRef === "S") {
          result.lat = -1 * result.lat;
        }
      }
      if (exifData.GPSLongitude && exifData.GPSLongitude.length > 0) {
        result.lang =
          exifData.GPSLongitude[0] +
          exifData.GPSLongitude[1] / 60 +
          exifData.GPSLongitude[2] / 3600;
        if (exifData.GPSLongitudeRef === "W") {
          result.lang = -1 * result.lang;
        }
      }
      return result;
    },
    readExif(file) {
      const reader = new FileReader();
      reader.onload = e => {
        let exifData = null;
        if (file.name.toLowerCase().endsWith(".heic")) {
          this.showThumbnail = false;
          exifData = findEXIFinHEIC(e.target.result);
        } else {
          this.showThumbnail = true;
          exifData = findEXIFinJPEG(e.target.result);
        }
        this.exifData = exifData;
        if (exifData === false) {
          console.log("cannot read exif");
          return;
        }
        this.exifTableData = [];
        for (let k in exifData) {
          let v = exifData[k];
          if (v instanceof Number) {
            v = v.toString();
          } else if (v instanceof Array) {
            v = v.reduce((a, b) => a.toString() + ", " + b.toString());
          }
          this.exifTableData.push({
            itemName: k,
            itemValue: v
          });
        }
        this.showResult = true;
        // const geoInfo = this.parseGeoInfo(exifData);

        // axios
        //   .create()
        //   .get(
        //     `http://dev.virtualearth.net/REST/v1/Locations/${geoInfo.lat},${geoInfo.lang}`,
        //     {
        //       params: {
        //         key:
        //           "Aky997C6PvPTL4sRyxntioU0-8ZeR3ja5CzAy_t14TUvB_qXOceZN0_f-JODYizp",
        //         c: "zh-Hans"
        //       }
        //     }
        //   )
        //   .then(resp => {
        //     if (resp.data.statusCode === 200) {
        //       // success response
        //       this.imageAddress =
        //         resp.data.resourceSets[0].resources[0].address.formattedAddress;
        //     }
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
      };

      reader.readAsArrayBuffer(file);
    },
    processImage(a) {
      const reader = new FileReader();
      reader.onload = e => {
        this.imageDataUrl = e.target.result;
      };
      reader.readAsDataURL(a.file);
    }
  }
};
</script>

<style>
div.el-upload.el-upload--text > div {
  width: 100%;
  height: 100%;
  padding-top: 30%;
}
.el-icon-upload {
  display: block;
  margin: auto auto;
}
.el-upload__tip {
  display: block;
}
.el-upload {
  min-width: max(80vh, 200px);
  min-height: min(80vh, 150px);
  max-width: min(80vh, 800px);
  max-height: max(60px, 600px);
  display: block;
}
 div.el-upload.el-upload--text > div {
  background-color: rgba(255, 255, 255, 0.3);
 }
.el-upload-dragger {
  width: 100%;
  height: 100%;
  display: block;
}
.flexwrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.uploader {
  display: block;
}
.summary {
  display: flex;
  justify-content: space-between;
  padding-top: 2em;
  font-size: x-large;
  color: white;
  font-weight: bold;
}
.img-wrapper img {
  width: 300px;
  height: 300px;
}
</style>