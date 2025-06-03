import { clockTime, clockInfo } from "../../data/data";
import DateVerifyScreen from "../../screenObjects/android/dateVerify.screen";

describe('Date verify', () => {
  it('add task and verify', async () => {
    await DateVerifyScreen.addTaskAndTitle();
  });

  it('select date', async () => {
    // hide the keyboard
    await driver.hideKeyboard();

    // click on start date button
    await DateVerifyScreen.startDateBtn.click();

    // save current date in variable
    await DateVerifyScreen.currentDateVariable.waitForDisplayed({ timeout: 5000 });
    const currentDate = await DateVerifyScreen.currentDateVariable.getText();

    // go to next month
    await DateVerifyScreen.nextMonthBtn.click();

    // select date
    await DateVerifyScreen.selectDay().click();


    // save new date in variable
    await DateVerifyScreen.newDateVariable.waitForDisplayed({ timeout: 5000 });
    const newDate = await DateVerifyScreen.newDateVariable.getText();

    // assertion
    await expect(currentDate).not.toEqual(newDate);

    // accept and close calendar
    await DateVerifyScreen.acceptDateBtn.click();
  });

  it('select time', async () => {
    // click on time btn
    await DateVerifyScreen.selectTimeBtn.click();

    // assertion
    await DateVerifyScreen.clockElement.waitForDisplayed({ timeout: 5000 });
    await expect(DateVerifyScreen.clockElement).toBeDisplayed();

    // select time to 12:45 AM
    await DateVerifyScreen.newHour().click();
    await DateVerifyScreen.newMinute().click();
    await DateVerifyScreen.newTimeOfDay().click();

    // assertion
    await expect(DateVerifyScreen.clockHours).toHaveText(clockInfo.hour12);
    await expect(DateVerifyScreen.clockMinutes).toHaveText(clockInfo.minute45);
  });
  
  it('change clock to different mode and save the time', async () => {
    // click to change clock to different mode
    await DateVerifyScreen.switchClockMode.click();

    // assertion
    await DateVerifyScreen.newClockHeader.waitForDisplayed({ timeout: 5000 });
    await expect(DateVerifyScreen.newClockHeader).toBeDisplayed();

    await expect(DateVerifyScreen.newClockHour).toHaveText(clockInfo.hour12);
    await expect(DateVerifyScreen.newClockMinutes).toHaveText(clockInfo.minute45);
    await expect(DateVerifyScreen.newClockDayTime).toHaveText(clockInfo.timeAM);

    // accept time
    await DateVerifyScreen.acceptTimeBtn.click();

    // assertion
    await DateVerifyScreen.clockTimeBtn().waitForDisplayed({ timeout: 5000});
    await expect(DateVerifyScreen.clockTimeBtn()).toHaveText(clockTime);
  });
});
