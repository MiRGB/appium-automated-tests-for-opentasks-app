class DoneTaskByOneBtn {
    get doneBtn() {
        return $('//android.widget.ImageButton[@resource-id="org.dmfs.tasks:id/floating_action_button"]');
    }
}

export default new DoneTaskByOneBtn();