
(function(){

	var cards = document.getElementsByClassName("slider_item");
	var numberOfCards = cards.length - 1;	//Количество элементов слайдера
	var distance =  (numberOfCards * -220) - (3 * -220);	//отступ всех элементов слайдера для отображения последних обновлений
	var rightEnd = 0;		// конец слайда влево
	var leftEnd = (numberOfCards * -220) - (3 * -220);  // конец слайда вправо

	for(var i = 0; i<=numberOfCards; i++){				
		cards[i].style = "left:"+distance+"px";		// Отображение последних добавляемых карточек
	}													

	$(document).ready(function(){

		$(".right_arrow").click(function(){			// прокрутка вправо
			if(distance == rightEnd) return;
			else{
					distance+=220;
					$(".slider_item").animate({left: distance},"slow");
				}
			});
		
		$(".left_arrow").click(function(){			// прокрутка влево
			if(distance == leftEnd) return;
			else{
					distance-=220
				 	$(".slider_item").animate({left: distance},"slow");
				}
							
			});

		});

		
		
})();
