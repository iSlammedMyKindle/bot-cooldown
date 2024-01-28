// Types written by @AceLikesGhosts, will throw it back for $5

/**
 * Creates a container that's designed to hold the usage of commands. Usage of each command is separated by each group/guild. That means if one server/group is using commands, it won't affect the usage of another server/group.
 */
export function guildGroup(): void;
export class guildGroup
{
    /**
     * Create a configuration for a guild/group. Configurations can be combined with others in order to have more flexebility. Combined configurations will have the `config` overwritten by what `linkTo` will be.
     * @param {string} guildId The target discord server / group you're applying this configuration to
     * @param {object} config Contains information about how often commands can be used. Commands can also be grouped together to contain the same time & usage points.
     * ```
     * //Example config
     * var myConfig = {
     *  //command-name can be used 3 times every 10 seconds. If the user goes beyond 3, they will wait the remaining seconds before using it again
     *  'command-name':{ uses:3, coolTime:10 },
     *
     *  //commands can be grouped together to have the same values:
     *  'myCommandGroup':{ isGroup:true, uses: 1, coolTime: 60, commands:['foo','bar'] },
     *
     *  //Groups with "glue" cause a domino effect. If one command is used, all the others are "used" too.
     *  'myGluedCommands':{ isGroup:true, glue:true, uses: 2, coolTime: 120, commands:['lorem', 'ipsum'] }
     * }
     * ```
     * @param {guild} linkTo a `guild` object will be a base for your new config. Any duplicate commands defined here are overwritten by `config`.
     * @returns {guild} The new configuration for that guild. Contains functions for updating the usage & appending seconds or usage points for commands.
     */
    createConfig(guildId: string, config: object, linkTo: guild): guild;
}
export function guild(id?: string): void;
export class guild
{
    constructor(id: string = '');
    id: string;
    commands: {};
    /**
     * Record the usage of a command. After recording, the function checks if the user can continue using the command or is blocked.
     * @param {string} cmd name of the command
     * @param {string} userId ID of the user
     * @param {number} timeStamp The exact moment the command was used. Number should be raw unix timestamp
     * @param {boolean} checkOnly Don't record the user's activity. Instead just show the current values/status of an existing cooldown.
     * @returns {undefined | { cooldownHit?: boolean, triedAgain?: boolean, secondsLeft?: number, blocked?: boolean }} undefined if the command doesn't exist, OR {cooldownHit: bool, triedAgain: bool, secondsLeft: number, blocked: bool} - These values don't have to exist
     */
    updateUsage(cmd: string, userId: string, timeStamp: number, checkOnly?: boolean):
        {
            cooldownHit?: boolean,
            triedAgain?: boolean,
            secondsLeft?: number,
            blocked?: boolean;
        };
    /**
     * Adds more time to the clock to potentially reset a command for a user or extend waiting time
     * @param {string} cmd Name of the command
     * @param {string} userId unique identifier for a user
     * @param {number} timeInSeconds how many seconds is being appended to this command?
     * @returns {void}
     */
    appendSeconds(cmd: string, userId: string, timeInSeconds?: number): void;
    /**
     *
     * @param {string} cmd Name of the command
     * @param {string} userId unique identifier for a user
     * @param {number} usagePoints total of points to be added to the exsiting amount. Be careful not to make this a negative number unless you intend on disabling the command for that user.
     * @returns {void}
     */
    appendUses(cmd: string, userId: string, usagePoints?: number): void;
}

declare function command(uses: number = 1, coolTime: number = 30): void;
declare function user(id: string = '', usesLeft: number = 1, timeStamp: number = 0): void;