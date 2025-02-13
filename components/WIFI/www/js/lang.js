var EN = {
	menu : {
		setting : "SETTING",
		dashboard : "DASHBOARD",
		information : "INFORMATION"
	},
	setting : {
		header : "ATGS M2M SETTING",
		title : "SET UP CONNECTION",
		caption : "The ATSG needs to connect the WiFi to send and receive the data. Please set up the controller connection by choosing the WIFI name (e.g. SENSE HUB) and password (e.g. 12345678) of the WIFI.",
		ssid : "WIFI NAME",
		password : "WIFI PASSWORD",
		showPassword : "SHOW PASSWORD",
		cmdScan : "SCAN",
		cmdConnect : "CONNECT",
		cmdRebootDevice : "REBOOT CONTROLLER",
		title_work_mode : "SET UP WORKING MODE",
		caption_work_mode : "The device can work with many mode depend on the user's situation",
		note_bridge_mode : "<b class=\"red-text\">BRIDGE MODE:</b> The device will connect with Sense Hub Gateway. Sense Hub gateway will communicate the device to update data and control",
		note_standalone_mode : "<b class=\"red-text\">STANDALONE MODE:</b> The device will connect to server by WiFi connection. The server will receive data from the device and remote control the device",
		label_bridge_mode : "BRIDGE MODE",
		label_standalone_mode : "STANDALONE MODE",
		cmdChangeWorkMode : "CHANGE MODE"
	},
	dashboard : {
		header : "DEVICE CONTROL CENTER",
		deviceName : {
			soilSensor : "SOIL SENSOR",
			airSensor : "AIR SENSOR",
			lightSensor : "LIGHT SENSOR",
			smartTank : "HYDROPONIC CONTROLLER",
			floodSensor : "FLOOD SENSOR"
		},
		sensorName : {
			lightSensor : "LIGHT",
			airTemp : "AIR TEMPERATURE",
			airHumidity : "AIR HUMIDITY",
			soilTemp : "SOIL TEMPERATURE",
			soilHumidity : "SOIL HUMIDITY",
			soilEC : "SOIL EC",
			soilPH : "SOIL PH",
			waterTemp : "WATER TEMPERATURE",
			waterPH : "WATER PH",
			waterEC : "WATER EC",
			waterORP : "WATER ORP",
			waterLevel : "WATER LEVEL",
			waterLeak : "WATER LEAK",
			error : "ERROR",
			bat : "BATTERY",
			co2 : "CO2"
		},
		controllerName : {
			lamp : "LAMP",
			waterPump : "WATER PUMP",
			oxygenPump : "OXYGEN PUMP",
			fan : "FAN",
			mistingPump : "MISTING PUMP",
			ac : "AIR CONDITIONER",
			dosingPump : "DOSING PUMP",
			waterValveIn : "WATER VALVE INPUT",
			waterValveOut : "WATER VALVE OUTPUT",
			washingTank : "WASHING TANK"
		},
		irLearningSuccessfully : "IR LEARNING SUCCESSFULLY",
		irLearningFailed : "IR LEARNING FAILED. PLEASE TRY AGAIN"
	},
	information : {
		header : "ATSG M2M PROFILE",
		deviceInfoTitle : "DEVICE INFORMATION",
		deviceInfoCaption : "The ATSG M2M is researched and developed by AGRHUB CO.,LTD. The device is managed by UUID",
		deviceName : "DEVICE NAME",
		deviceMacAddress : "DEVICE UUID",
		deviceManufacture : "MANUFACTURE",
		deviceProductionDate : "PRODUCTION DATE",
		deviceHardwareID : "HARDWARE ID",
		deviceUpdateTitle : "FIRWARE INFORMATION",
		deviceUpdateCaption : "The ATSG M2M can automatic update firmware to improve performance and support new devices. User can choose update new firmware automaticaly or by manually",
		deviceUpdateWarning : "Warning: The updating can effect to device. Device can not work with wrong firmware. Please only use auto update feature.",
		deviceOnlineUpdate : "ONLINE UPDATE",
		deviceSoftwareVersion : "SOFTWARE VERSION",
		deviceSoftwareDate : "RELEASE DATE",
		deviceSoftwareNewVersion : "NEW VERSION",
		cmdFirmwareCheck : "CHECK NEW FIRMWARE",
		cmdUpdate : "UPDATE",
		toastDeviceNewVersion : "HAS NEW VERSION. PLEASE UPDATE YOUR DEVICE",
		toastDeviceUpToDate : "YOUR DEVICE IS UP TO DATE",
		deviceLocalUpdate : "LOCAL UPDATE",
		devicePasswordUpdate : "PASSWORD",
		deviceFirmwarePath : "FIRMWARE PATH",
		cmdFactoryReset : "FACTORY RESET"
	},
	actions : {
		chooseWiFi : "CHOOSE WIFI NAME",
		emptySSID : "PLEASE CHOOSE A WIFI NETWORK",
		connectSuccessfully : "CONNECT SUCCESSFULLY",
		connectFailed : "CONNECT FAILED. WRONG PASSWORD OR NETWORK ERROR",
		deviceRestarted : "DEVICE WILL BE RESTARTED IN 10s",
		emptyPassword : "PASSWORD IS EMPTY",
		invalidPassword : "PASSWORD IS INVALID",
		emptyFirmware : "PLEASE PICK UP A FIRMWARE FILE",
		updateSuccessfully : "UPDATE SUCCESSFULLY. DEVICE WILL BE RESTARTED IN 10S",
		updateFailed : "UPDATE FAILED, PLEASE TRY AGAIN LATER",
		checkFirmwareFailed : "CHECK FIRMWARE FAILED. PLEASE TRY AGAIN LATER",
		deviceOutOfDate : "DEVICE HAS A NEW FIRMWARE VERSION",
		deviceUpToDate : "DEVICE IS UP TO DATE",
		factoryResetSuccessfully : "DEVICE HAS BEEN RESET TO FACTORY. DEVICE WILL BE RESTARTED IN 10S",
		factoryResetFailed : "FACTORY RESET FAILED. PLEASE TRY AGAIN LATER."
	}
};

var VI = {
	menu : {
		setting : "CÀI ĐẶT",
		dashboard : "QUẢN LÝ",
		information : "THÔNG TIN"
	},
	setting : {
		header : "CÀI ĐẶT BỘ ĐIỀU KHIỂN ATSG M2M",
		title : "CẤU HÌNH KẾT NỐI INTERNET",
		caption : "Bộ điều khiển ATSG cần phải được kết nối internet đến mạng WiFi để gởi và nhận dữ liệu. Vui lòng cấu hình kết nối cho bộ điều khiển bằng cách chọn mạng WIFI (ví dụ: SENSE HUB XXX) và mật khẩu tương ứng với mạng WIFI (ví dụ: 12345678).",
		ssid : "TÊN MẠNG WIFI",
		password : "MẬT KHẨU WIFI",
		showPassword : "HIỆN  MẬT KHẨU",
		cmdScan : "QUÉT MẠNG WIFI",
		cmdConnect : "KẾT NỐI",
		cmdRebootDevice : "KHỞI ĐỘNG LẠI",
		title_work_mode : "CẤU HÌNH CHẾ ĐỘ HOẠT ĐỘNG",
		caption_work_mode : "Thiết bị có thể hoạt động ở nhiều chế độ khác nhau tùy thuộc vào nhu cầu của người dùng",
		note_bridge_mode : "<b class=\"red-text\">CHẾ ĐỘ NỐI TIẾP:</b> Thiết bị sẽ kết nối với bộ điều khiển trung tâm Sense Hub. Bộ điều khiển trung tâm sẽ giao tiếp với thiết bị để cập nhật dữ liệu và điều khiển",
		note_standalone_mode : "<b class=\"red-text\">CHẾ ĐỘ ĐỘC LẬP:</b> Thiết bị sẽ kết nối trực tiếp với máy chủ thông qua internet để cập nhật dữ liệu và điều khiển",
		label_bridge_mode : "CHẾ ĐỘ NỐI TIẾP",
		label_standalone_mode : "CHẾ ĐỘ ĐỘC LẬP",
		cmdChangeWorkMode : "CẬP NHẬT"
	},
	dashboard : {
		header : "QUẢN LÝ THIẾT BỊ ĐƯỢC KẾT NỐI VỚI BỘ ĐIỀU KHIỂN THỦY CANH",
		deviceName : {
			soilSensor : "CẢM BIẾN ĐẤT",
			airSensor : "CẢM BIẾN KHÔNG KHÍ",
			lightSensor : "CẢM BIẾN ÁNH SÁNG",
			smartTank : "BỘ ĐIỀU KHIỂN THỦY CANH",
			floodSensor : "CẢM BIẾN NƯỚC"
		},
		sensorName : {
			light : "ÁNH SÁNG",
			airTemp : "NHIỆT ĐỘ",
			airHumidity : "ĐỘ ẨM",
			soilTemp : "NHIỆT ĐỘ ĐẤT",
			soilHumidity : "ĐỘ ẨM ĐẤT",
			soilEC : "DINH DƯỠNG ĐẤT",
			soilPH : "PH ĐẤT",
			waterTemp : "NHIỆT ĐỘ NƯỚC",
			waterPH : "PH NƯỚC",
			waterEC : "EC NƯỚC",
			waterORP : "ORP NƯỚC",
			waterLevel : "MỰC NƯỚC",
			waterLeak : "RÒ RỈ NƯỚC",
			error : "LỖI",
			bat : "PIN",
			co2 : "CO2"
		},
		controllerName : {
			lamp : "ĐÈN",
			waterPump : "BƠM NƯỚC",
			oxygenPump : "BƠM OXY",
			fan : "QUẠT",
			mistingPump : "PHUN SƯƠNG",
			ac : "ĐIỀU HÒA",
			dosingPump : "BƠM DINH DƯỠNG",
			waterValveIn : "VAN CẤP NƯỚC",
			waterValveOut : "VAN XẢ NƯỚC",
			washingTank : "VỆ SINH BỒN"
		},
		irLearningSuccessfully : "HỌC LỆNH THÀNH CÔNG",
		irLearningFailed : "HỌC LỆNH KHÔNG THÀNH CÔNG. VUI LÒNG THỬ LẠI"
	},
	information : {
		header : "THÔNG TIN THIẾT BỊ ĐIỀU KHIỂN ATSG M2M",
		deviceInfoTitle : "THÔNG TIN",
		deviceInfoCaption : "Thiết bị điều khiển ATSG M2M được nghiên cứu và phát triển bởi AGRHUB CO.,LTD và ATS. Mỗi thiết bị sẽ có một mã số duy nhất để quản lý",
		deviceName : "TÊN THIẾT BỊ",
		deviceMacAddress : "MÃ SỐ THIẾT BỊ",
		deviceManufacture : "NHÀ SẢN XUẤT",
		deviceProductionDate : "NGÀY SẢN XUẤT",
		deviceHardwareID : "MÃ PHẦN CỨNG",
		deviceUpdateTitle : "THÔNG TIN PHẦN MỀM",
		deviceUpdateCaption : "Thiết bị có khả năng tự cập nhật phần mềm để nâng cáo hiệu năng và bổ sung các thiết bị ngoại vi mới. Người dùng có thể cập nhật phần mềm cho thiết bị trực tuyến hoặc thủ công",
		deviceUpdateWarning : "Cảnh báo: Việc cập nhật sẽ ảnh hưởng đến thiết bị và có thể ngừng hoạt động nếu cập nhật sai phần mềm. Chỉ nên sử dụng chức cập nhật trực tuyến để đảm bảo an toàn cho thiết bị.",
		deviceOnlineUpdate : "TRỰC TUYẾN",
		deviceSoftwareVersion : "PHIÊN BẢN PHẦN MỀM",
		deviceSoftwareDate : "NGÀY PHÁT HÀNH",
		deviceSoftwareNewVersion : "PHIÊN BẢN MỚI",
		cmdFirmwareCheck : "KIỂM TRA CẬP NHẬT",
		cmdUpdate : "CẬP NHẬT",
		toastDeviceNewVersion : "THIẾT BỊ CÓ PHIÊN BẢN MỚI",
		toastDeviceUpToDate : "THIẾT BỊ HIỆN TẠI ĐÃ CHẠY PHIÊN BẢN MỚI NHẤT",
		deviceLocalUpdate : "NGOẠI TUYẾN",
		devicePasswordUpdate : "MẬT KHẨU BẢO VỆ",
		deviceFirmwarePath : "ĐƯỜNG DẪN FILE CẬP NHẬT",
		cmdFactoryReset : "KHÔI PHỤC CÀI ĐẶT GỐC"
	},
	actions : {
		chooseWiFi : "CHỌN MẠNG WIFI",
		emptySSID : "VUI LÒNG CHỌN MẠNG WIFI ĐỂ KẾT NỐI INTERNET",
		connectSuccessfully : "KẾT NỐI THÀNH CÔNG",
		connectFailed : "KẾT NỐI KHÔNG THÀNH CÔNG. LỖI SAI MẬT KHẨU HOẶC MẠNG WIFI BỊ LỖI",
		deviceRestarted : "THIẾT BỊ SẼ KHỞI ĐỘNG LẠI TRONG 10S",
		emptyPassword : "CHƯA NHẬP MẬT KHẨU QUẢN TRỊ",
		invalidPassword : "MẬT KHẨU KHÔNG ĐÚNG",
		emptyFirmware : "VUI LÒNG CHỌN FIRMWARE CỦA THIẾT BỊ",
		updateSuccessfully : "CẬP NHẬT THÀNH CÔNG. THIẾT BỊ SẼ KHỞI ĐỘNG LẠI TRONG 10S",
		updateFailed : "LỖI CẬP NHẬT. VUI LÒNG THỬ LẠI SAU",
		checkFirmwareFailed : "LỖI KIỂM TRA FIRMWARE. VUI LÒNG THỬ LẠI SAU",
		deviceOutOfDate : "THIẾT BỊ CÓ PHẦN MỀM MỚI",
		deviceUpToDate : "THIẾT BỊ ĐANG CHẠY PHẦN MỀM MỚI NHẤT",
		factoryResetSuccessfully : "KHÔI PHỤC CÀI ĐẶT GỐC THÀNH CÔNG. THIẾT BỊ SẼ KHỞI ĐỘNG LẠI TRONG 10S",
		factoryResetFailed : "LỖI KHÔI PHỤC CÀI ĐẶT GỐC. VUI LÒNG THỬ LẠI SAU."
	}
};

var CN = {

};

var JP = {

};

var LANG = VI;

function Language(){
	var fn = this;
	fn.setLanguage = function(lang){
		if(lang == "vi"){
			LANG = VI;
		}

		if(lang == "en"){
			LANG = EN;
		}

		if(lang == "cn"){
			LANG = CN;
		}

		if(lang == "jp"){
			LANG = JP;
		}
	};

	fn.init = function(){
		fn.initMenu();
		fn.initSettingPage();
		fn.initDashboardPage();
		fn.initProfilePage();
	};

	fn.initMenu = function(){
		$("a[href='#sta-setting-page']").html(LANG["menu"]["setting"]);
		$("a[href='#dashboard-page']").html(LANG["menu"]["dashboard"]);
		$("a[href='#device-info-page']").html(LANG["menu"]["information"]);
	};

	fn.initSettingPage = function(){
		$("#sta-setting-page .header").html(LANG["setting"]["header"]);
		$("#sta-setting-page .card-title.wifi").html(LANG["setting"]["title"]);
		$("#sta-setting-page .card-caption.wifi").html(LANG["setting"]["caption"]);
		$("#sta-setting-page label[for='staSSID']").html(LANG["setting"]["ssid"]);
		$("#sta-setting-page label[for='staPWD']").html(LANG["setting"]["password"]);
		$("#sta-setting-page label[for='cmdShowPWD']").html(LANG["setting"]["cmdShowPWD"]);
		$("#cmdScanWiFi").html(LANG["setting"]["cmdScan"]);
		$("#cmdConnectWiFi").html(LANG["setting"]["cmdConnect"]);
		$("#cmdResetDevice").html(LANG["setting"]["cmdRebootDevice"]);

		$("#sta-setting-page .card-title.work-mode").html(LANG["setting"]["title_work_mode"]);
		$("#sta-setting-page .card-caption.work-mode").html(LANG["setting"]["caption_work_mode"]);
		$("#sta-setting-page .card-note.bridge-mode").html(LANG["setting"]["note_bridge_mode"]);
		$("#sta-setting-page .card-note.standalone-mode").html(LANG["setting"]["note_standalone_mode"]);
		$("#sta-setting-page .label-bridge-mode").html(LANG["setting"]["label_bridge_mode"]);
		$("#sta-setting-page .label-standalone-mode").html(LANG["setting"]["label_standalone_mode"]);
		$("#cmdChangeWorkMode").html(LANG["setting"]["cmdChangeWorkMode"]);
	};

	fn.initDashboardPage = function(){
		$("#dashboard-page .header").html(LANG["dashboard"]["header"]);
		//$("#dashboard-page .").html(LANG["dashboard"]["header"]);
	};

	fn.initProfilePage =  function(){
		$("#device-info-page .header").html(LANG["information"]["header"]);

		$("#device-info-container .card-title").html(LANG["information"]["deviceInfoTitle"]);
		$("#device-info-container p").html(LANG["information"]["deviceInfoCaption"]);

		$("#device-info-container .device-name").html(LANG["information"]["deviceName"]);
		$("#device-info-container .device-mac-address").html(LANG["information"]["deviceMacAddress"]);
		$("#device-info-container .device-manufacture").html(LANG["information"]["deviceManufacture"]);
		$("#device-info-container .device-production-date").html(LANG["information"]["deviceProductionDate"]);
		$("#device-info-container .device-hardware-version").html(LANG["information"]["deviceHardwareID"]);

		$("#device-software-container .card-title").html(LANG["information"]["deviceUpdateTitle"]);
		$("#device-software-container .card-caption").html(LANG["information"]["deviceUpdateCaption"]);
		$("#device-software-container .card-note").html(LANG["information"]["deviceUpdateWarning"]);

		$("#device-software-container a[href='#onlineOTAUpdate']").html(LANG["information"]["deviceOnlineUpdate"]);
		$("#device-software-container a[href='#localOTAUpdate']").html(LANG["information"]["deviceLocalUpdate"]);
		
		$("#device-software-container .software-version").html(LANG["information"]["deviceSoftwareVersion"]);
		$("#device-software-container .software-release-date").html(LANG["information"]["deviceSoftwareDate"]);
		$("#device-software-container .new-software-version").html(LANG["information"]["deviceSoftwareNewVersion"]);
		$("#cmdCheckUpdateFirmware").html(LANG["information"]["cmdFirmwareCheck"]);	
		$("#cmdOnlineUpdateFirmware").html(LANG["information"]["cmdUpdate"]);	
		
		$("#device-software-container label[for='adminPWD']").html(LANG["information"]["devicePasswordUpdate"]);	
		$("#device-software-container label[for='firmwarePath']").html(LANG["information"]["deviceFirmwarePath"]);	
		$("#cmdLocalUpdateFirmware").html(LANG["information"]["cmdUpdate"]);	

		$("#cmdFactoryReset").html(LANG["information"]["cmdFactoryReset"]);
	};
}