import { taskTitle1 } from "../../data/data";

class SearchTaskScreen {
    get searchNav() {
        return $('(//android.widget.ImageView[@package="org.dmfs.tasks"])[7]');
    }

    get searchInput() {
        return $('//android.widget.AutoCompleteTextView[@resource-id="org.dmfs.tasks:id/search_src_text"]');
    }

    searchElement(text = taskTitle1) {
        return $(`//android.widget.TextView[@text="${text}"]`);
    }
}

export default new SearchTaskScreen();