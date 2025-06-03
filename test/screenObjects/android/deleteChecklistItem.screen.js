import { checklistItems } from "../../data/data";

class DeleteChecklistItemScreen {
    itemToDelete(text = checklistItems.testItem1) {
        return $(`//*[@text="${text}"]`);
    }

    get deleteBtn() {
        return $('//*[@text="Delete"]');
    }

    get myTasksBtn() {
        return $('//*[@text="My tasks"]');
    }

    get backBtn() {
        return $('~Navigate up');
    }

    get countElement() {
        return $('//android.widget.TextView[@resource-id="org.dmfs.tasks:id/checkbox_item_count"]');
    }
}

export default new DeleteChecklistItemScreen();