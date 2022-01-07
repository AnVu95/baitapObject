function Validation() {
     this.checkEmpty = function (value, spanID, message) {
          if (value.trim() != "") {
               document.getElementById(spanID).innerHTML = "";
               document.getElementById(spanID).style.display = 'none';
               return true;
          }
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = 'block';
          return false;
     }
     this.checkID = function (value, spanID, message, mangNV) {

          var isExist = false;
          isExist = mangNV.some(function (nv) {
               return nv.taiKhoan == value;
          });

          if (isExist) {
               //mã bị trùng
               getELE(spanID).innerHTML = message;
               getELE(spanID).style.display = 'block';
               return false;
          }

          //nếu hợp lệ
          getELE(spanID).innerHTML = "";
          getELE(spanID).style.display = 'none';
          return true;
     }

     // Kiểm tra Name
     this.checkName = function (value, spanID, message) {
          var patternString = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ"
               + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ"
               + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";

          var pattern = new RegExp(patternString);
          if (pattern.test(value)) {
               //đúng định dạng
               getELE(spanID).innerHTML = "";
               getELE(spanID).style.display = 'none';
               return true;
          }
          // Không hợp lệ
          getELE(spanID).innerHTML = message;
          getELE(spanID).style.display = 'block';
          return false;
     }

     this.checkEmail = function (value, spanID, message) {
          var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

          if (value.match(pattern)) {
               //đúng định dạng
               getELE(spanID).innerHTML = "";
               getELE(spanID).style.display = 'none';
               return true;
          }
          // Không hợp lệ
          getELE(spanID).innerHTML = message;
          getELE(spanID).style.display = 'block';
          return false;
     }

     this.checkPass = function (value, spanID, message) {
          var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;

          if (value.match(pattern)) {
               //đúng định dạng
               getELE(spanID).innerHTML = "";
               getELE(spanID).style.display = 'none';
               return true;
          }
          // Không hợp lệ
          getELE(spanID).innerHTML = message;
          getELE(spanID).style.display = 'block';
          return false;
     }

     this.checkDate = function (value, spanID, message) {
          var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
          if (value.match(pattern)) {
               //Hợp lệ
               document.getElementById(spanID).innerHTML = "";
               document.getElementById(spanID).style.display = "none";
               return true;
          }
          //Không hợp lệ
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = "block";
          return false;
     }

     this.checkLuong = function (value, spanID, message) {
          var pattern = /^(\d{1,20}(\.\d{1,20})?)$/;
          if (value.match(pattern) && value >= 1000000 && value <= 20000000) {
               //đúng định dạng
               getELE(spanID).innerHTML = "";
               getELE(spanID).style.display = 'none';
               return true;
          }
          // Không hợp lệ
          getELE(spanID).innerHTML = message;
          getELE(spanID).style.display = 'block';
          return false;
     }
     this.checkSelect = function (selectID, spanID, message) {
          if (document.getElementById(selectID).selectedIndex != 0) {
               //hợp lệ
               document.getElementById(spanID).innerHTML = "";
               document.getElementById(spanID).style.display = 'none';
               return true;
          }
          //không hợp lệ
          document.getElementById(spanID).innerHTML = message;
          document.getElementById(spanID).style.display = 'block';
          return false;

     }

     this.checkGio = function (value, spanID, message) {
          var pattern = /^(\d{1,9}(\.\d{1,9})?)$/;
          if (value.match(pattern) && value >= 80 && value <= 200) {
               //đúng định dạng
               getELE(spanID).innerHTML = "";
               getELE(spanID).style.display = 'none';
               return true;
          }
          // Không hợp lệ
          getELE(spanID).innerHTML = message;
          getELE(spanID).style.display = 'block';
          return false;
     }
}