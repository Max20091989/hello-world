function clearPlaceholder(event){	//�������� �������� placeholder ��� ����� �� ��������� ����
		var defaulth_values = ["Name","Email","Text"];
		var input_field = event.target;
			if(input_field.value == defaulth_values[0] || input_field.value == defaulth_values[1] || input_field.value == defaulth_values[2])
				input_field.value = "";
			else return;
		}
		
function returnPlaceholder(event){	//�������������� �������� placeholder ��� ������������ �� ������ ����
		var element = event.target;
			if(element.value == "") element.value = event.target.attributes["value"].value;
		}