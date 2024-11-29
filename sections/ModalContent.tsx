export default function ModalContent({
  title,
  description,
  mainButtonText,
  mainButtonLink,
  checkboxLabel,
  checkboxRequired = false,
}: Props) {
  return (
    <div class="modal-box">
      <h3 class="font-bold text-lg">{title}</h3>
      <p class="py-4">{description}</p>
      <div class="modal-action">
        <a href={mainButtonLink} class="btn btn-primary">{mainButtonText}</a>
        {checkboxLabel && (
          <div class="form-control">
            <label class="label cursor-pointer">
              <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" required={checkboxRequired} />
              <span class="label-text ml-2">{checkboxLabel}</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}