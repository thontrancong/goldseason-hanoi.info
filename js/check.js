function checkInfoCustomer() {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var mobileReg = /^[0-9][\d]{9,13}$/;

	var name = $("input[name='full_name']").val();
	if ($.trim(name) == '') {
		alert("Vui lòng nhập họ và tên!");
		$("input[name='ho_ten']").focus();
		return false;
	}

	var mobile = $("input[name='phone']").val();
	if ($.trim(mobile) == '') {
		alert("Vui lòng nhập số điện thoại");
		$("input[name='mobile']").focus();
		return false;
	} else if (!mobileReg.test(mobile)) {
		alert("Định dạng số điện thoại không đúng! Hãy kiểm tra lại");
		$("input[name='mobile']").focus();
		return false;
	}

	var email = $("input[name='email']").val();
	if ($.trim(email) == '') {
		alert("Vui lòng nhập email");
		$("input[name='email']").focus();
		return false;
	} else if (!emailReg.test(email)) {
		alert("Định dạng email không đúng! Hãy kiểm tra lại.");
		$("input[name='email']").focus();
		return false;
	}

	var content = $("textarea[name='content']").val();
//	if ($.trim(content) == '') {
//		alert("Vui lòng nhập nội dung!");
//		$("textarea[name='content']").focus();
//		return false;
//	}

	$.ajax({
		type : "POST",
		url : "http://goldseason-hanoi.info/Site/SendMail",
		data : {
			name : name,
			content : content,
			mobile : mobile,
            email : email
		},
		dataType : "json",
		success : function(response) {
			if (response.status == 1) {
				alert(response.msg);
			}
		}

	});
}


function checkDangKy() {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	
	var email = $("input[name='dk_email']").val();
	if ($.trim(email) == '') {
		alert("Vui lòng nhập email");
		$("input[name='email']").focus();
		return false;
	} else if (!emailReg.test(email)) {
		alert("Định dạng email không đúng! Hãy kiểm tra lại.");
		$("input[name='email']").focus();
		return false;
	}


	$.ajax({
		type : "POST",
		url : "http://goldseason-hanoi.info/Site/DangKy",
		data : {
            email : email
		},
		dataType : "json",
		success : function(response) {
			if (response.status == 1) {
				alert(response.msg);
			}
		}

	});
}