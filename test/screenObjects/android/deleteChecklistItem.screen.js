import { testItem1 } from "../../data/data";

class DeleteChecklistItemScreen {
    itemToDelete(text = testItem1) {
        return $(`//*[@text="${text}"]`);
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get myTasksBtn() {
        return $('//*[@text="My tasks"]');
    }

    get countElement() {
        return $('//android.widget.TextView[@resource-id="org.dmfs.tasks:id/checkbox_item_count"]');
    }
}

export default new DeleteChecklistItemScreen();