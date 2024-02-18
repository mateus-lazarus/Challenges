import pyperclip


pyperclip.copy('The text to be copied to the clipboard.')

pyperclip.paste()

breakPoint = True;

while(breakPoint):
   pyperclip.waitForNewPaste()
   
   pastContent = pyperclip.paste()
   
   # text0 = f'public class {pastContent[0:len(pastContent)-7]} : {pastContent}' + "\n{ }\n"
   # text1 = f'[Trace]\n\tpublic Task Handle({pastContent[0:len(pastContent)-7]} command, CancellationToken cancellationToken)\n'
   # text2 = "\t{\n" + f'\t\treturn Handle(command as {pastContent}, cancellationToken);\n'
   # text3 = "\t}"
   text4 = f', IRequestHandler<{pastContent[0:len(pastContent)-7]}>'
   
   expectedText = text4 
   
   print(expectedText);
   
   pyperclip.copy(expectedText);
   