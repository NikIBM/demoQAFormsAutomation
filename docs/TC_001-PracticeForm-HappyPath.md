# Test Case: TC_001 — Practice Form — Submit valid data (happy path)

Test Intent:
- Verify successful submission of the Practice Form on https://demoqa.com/forms using valid input for all required fields.

Test Case ID: TC_001
Test Title: Practice Form — Submit valid data (happy path)

Preconditions:
- Browser can reach https://demoqa.com/forms and the Practice Form page is accessible.
- No modal/overlay blocks form inputs.
- Test fixtures (sample image) available at `tests/forms/data/fixtures/sample.jpg` (recommended).

Test Steps:
1. Navigate to the Practice Form page (`https://demoqa.com/forms`).
2. Fill `First Name` with a valid string.
3. Fill `Last Name` with a valid string.
4. Fill `Email` with a valid email address.
5. Select a `Gender` radio option.
6. Fill `Mobile` number with a valid 10-digit number.
7. Select a `Date of Birth` using the date picker.
8. Enter one or more `Subjects` via autocomplete and select them.
9. Select at least one `Hobbies` checkbox.
10. Upload a valid image file using the picture upload control.
11. Fill `Current Address` with a valid address string.
12. Select `State` and then `City` dropdown values.
13. Click `Submit`.

Expected Results:
1. The Practice Form page loads and all form controls are visible and enabled.
2. The `First Name` and `Last Name` inputs contain the typed values.
3. The `Email` input contains the typed email and shows no validation error.
4. The selected `Gender` radio is marked as selected.
5. The `Mobile` input contains the number and shows no validation error.
6. The `Date of Birth` field displays the chosen date.
7. Selected `Subjects` appear as chips/tags in the field.
8. Selected `Hobbies` checkboxes are checked.
9. The uploaded file is accepted (filename or preview visible) and no error is shown.
10. `Current Address` contains the typed address.
11. `State` and `City` show the chosen values.
12. On submit, a confirmation modal/table appears showing the submitted data.

Postconditions:
- Submitted form data is shown in the confirmation modal; closing the modal returns to the form.

Automation Notes / Readiness:
- Capture stable selectors from the live DOM before implementing the page-object.
- Confirm exact validation message strings and whether validation is inline or native browser validation.
- Ensure a small sample image fixture is available at `tests/forms/data/fixtures/` for upload tests.

---

Saved: `docs/TC_001-PracticeForm-HappyPath.md`
