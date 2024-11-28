export default function FullPageModule() {
    var fullpages = document.querySelector("#fullpage");
    if (fullpages) {
        if (window.innerWidth > 1200) {
            new fullpage('#fullpage', {
                autoScrolling: true,
                scrollHorizontally: true,
                // anchors:['0', '1', '2', '3', '4', '5', '6'],
            });
        }

        $('.move-to-top').click(function(){
            fullpage_api.moveTo(1, 0);
        });
    }
}