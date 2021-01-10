import * as vscode from 'vscode'

import * as commands from './commands'
import { CommandManager } from './commandManager'
import NotionPanelManager from './notionPanelManager'

export function activate(context: vscode.ExtensionContext) {
  const manager = new NotionPanelManager(context.extensionUri)

  context.subscriptions.push(registerCommands(context, manager))
  vscode.window.registerWebviewPanelSerializer('vscode-notion.view', manager)
}

function registerCommands(
  context: vscode.ExtensionContext,
  manager: NotionPanelManager
): vscode.Disposable {
  const commandManager = new CommandManager()
  commandManager.register(new commands.OpenPage(context, manager))
  commandManager.register(new commands.RefreshPage())
  return commandManager
}
