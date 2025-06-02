class AddPriorityTaskScreen {
    get priorityBtn() {
        return $('(//android.widget.Spinner[@resource-id="org.dmfs.tasks:id/integer_choices_spinner"])[2]');
    }

    async scrollToEnd() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }

    get mediumPrioritySelect() {
        return $('//android.widget.ListView/android.widget.LinearLayout[3]');
    }

    get priorityNav() {
        return $('//android.widget.HorizontalScrollView[@resource-id="org.dmfs.tasks:id/tabs"]/android.widget.LinearLayout/android.widget.LinearLayout[4]');
    }

    get mediumPriorityTasksNumber() {
        return $("//android.widget.TextView[@resource-id='android:id/text2' and contains(@text, '1 task')]");
    }
}

export default new AddPriorityTaskScreen();