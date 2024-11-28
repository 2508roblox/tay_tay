export default function tabModule() {
    const tabs = document.querySelectorAll('.tab');
    const tabPanels = document.querySelectorAll('.tab-panel');
    if (tabs) {
        tabs.forEach((tab, index) => {
            const tabPanel = tabPanels[index];

            tab.onclick = function () {
                document.querySelector('.tab.active').classList.remove('active');
                document.querySelector('.tab-panel.active').classList.remove('active');

                this.classList.add("active");
                tabPanel.classList.add("active");
            };
        });
    }
}