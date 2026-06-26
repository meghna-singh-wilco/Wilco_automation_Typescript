import { Locator, Page, TestInfo } from '@playwright/test';
import { ReportUtil } from './ReportUtil';

export class CommonActions {

    private static async fail(
        page: Page,
        testInfo: TestInfo,
        message: string,
        continueOnFailure: boolean
    ) {

        await ReportUtil.captureStep(page, testInfo, `FAIL - ${message}`);

        if (!continueOnFailure) {
            throw new Error(message);
        }
    }

    static async click(
        locator: Locator,
        page: Page,
        testInfo: TestInfo,
        elementName: string,
        continueOnFailure: boolean = false
    ) {

        try {

            const visible = await locator.isVisible();

            if (!visible) {
                return await this.fail(
                    page,
                    testInfo,
                    `${elementName} is NOT Visible`,
                    continueOnFailure
                );
            }

            const enabled = await locator.isEnabled();

            if (!enabled) {
                return await this.fail(
                    page,
                    testInfo,
                    `${elementName} is Disabled`,
                    continueOnFailure
                );
            }

            await locator.click();

            await ReportUtil.captureStep(
                page,
                testInfo,
                `PASS - Clicked ${elementName}`
            );

        } catch (error: any) {

            await this.fail(
                page,
                testInfo,
                `${elementName} Click Failed : ${error.message}`,
                continueOnFailure
            );
        }
    }

    static async fill(
        locator: Locator,
        value: string,
        page: Page,
        testInfo: TestInfo,
        elementName: string,
        continueOnFailure: boolean = false
    ) {

        try {

            if (!(await locator.isVisible())) {

                return await this.fail(
                    page,
                    testInfo,
                    `${elementName} is NOT Visible`,
                    continueOnFailure
                );
            }

            if (!(await locator.isEditable())) {

                return await this.fail(
                    page,
                    testInfo,
                    `${elementName} is NOT Editable`,
                    continueOnFailure
                );
            }

            await locator.fill(value);

            await ReportUtil.captureStep(
                page,
                testInfo,
                `PASS - ${elementName} Entered`
            );

        } catch (error: any) {

            await this.fail(
                page,
                testInfo,
                `${elementName} Fill Failed : ${error.message}`,
                continueOnFailure
            );
        }
    }

    static async verifyVisible(
        locator: Locator,
        page: Page,
        testInfo: TestInfo,
        elementName: string,
        expected: boolean = true,
        continueOnFailure: boolean = false
    ) {

        const actual = await locator.isVisible().catch(() => false);

        await ReportUtil.captureStep(
            page,
            testInfo,
            `${elementName} Visibility = ${actual}`
        );

        if (actual !== expected) {

            await this.fail(
                page,
                testInfo,
                `${elementName} Visibility Mismatch. Expected : ${expected} Actual : ${actual}`,
                continueOnFailure
            );
        }
    }

    static async verifyEnabled(
        locator: Locator,
        page: Page,
        testInfo: TestInfo,
        elementName: string,
        expected: boolean = true,
        continueOnFailure: boolean = false
    ) {

        const actual = await locator.isEnabled().catch(() => false);

        await ReportUtil.captureStep(
            page,
            testInfo,
            `${elementName} Enabled = ${actual}`
        );

        if (actual !== expected) {

            await this.fail(
                page,
                testInfo,
                `${elementName} Enabled Mismatch. Expected : ${expected} Actual : ${actual}`,
                continueOnFailure
            );
        }
    }

    static async verifyEditable(
        locator: Locator,
        page: Page,
        testInfo: TestInfo,
        elementName: string,
        expected: boolean = true,
        continueOnFailure: boolean = false
    ) {

        const actual = await locator.isEditable().catch(() => false);

        await ReportUtil.captureStep(
            page,
            testInfo,
            `${elementName} Editable = ${actual}`
        );

        if (actual !== expected) {

            await this.fail(
                page,
                testInfo,
                `${elementName} Editable Mismatch. Expected : ${expected} Actual : ${actual}`,
                continueOnFailure
            );
        }
    }

    static async verifyChecked(
        locator: Locator,
        page: Page,
        testInfo: TestInfo,
        elementName: string,
        expected: boolean = true,
        continueOnFailure: boolean = false
    ) {

        const actual = await locator.isChecked().catch(() => false);

        await ReportUtil.captureStep(
            page,
            testInfo,
            `${elementName} Checked = ${actual}`
        );

        if (actual !== expected) {

            await this.fail(
                page,
                testInfo,
                `${elementName} Checked Mismatch. Expected : ${expected} Actual : ${actual}`,
                continueOnFailure
            );
        }
    }

    static async verifyText(
        locator: Locator,
        expectedText: string,
        page: Page,
        testInfo: TestInfo,
        elementName: string,
        continueOnFailure: boolean = false
    ) {

        try {

            const actual = (await locator.textContent())?.trim() ?? "";

            await ReportUtil.captureStep(
                page,
                testInfo,
                `${elementName} Text = ${actual}`
            );

            if (!actual.includes(expectedText)) {

                return await this.fail(
                    page,
                    testInfo,
                    `${elementName} Text Mismatch. Expected : ${expectedText} Actual : ${actual}`,
                    continueOnFailure
                );
            }

        } catch (error: any) {

            await this.fail(
                page,
                testInfo,
                `${elementName} Text Verification Failed : ${error.message}`,
                continueOnFailure
            );
        }
    }
}