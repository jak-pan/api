(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{300:function(e,t,a){"use strict";a.r(t);var r=a(38),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"constants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constants","aria-hidden":"true"}},[e._v("#")]),e._v(" Constants")]),e._v(" "),a("p",[e._v("_The following sections contain the module constants, also known as parameter types.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#babe"}},[e._v("babe")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#balances"}},[e._v("balances")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#contracts"}},[e._v("contracts")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#democracy"}},[e._v("democracy")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#elections"}},[e._v("elections")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#finalityTracker"}},[e._v("finalityTracker")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#session"}},[e._v("session")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#staking"}},[e._v("staking")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#timestamp"}},[e._v("timestamp")])])])]),e._v(" "),a("li",[a("p",[a("strong",[a("a",{attrs:{href:"#treasury"}},[e._v("treasury")])])])])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"babe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babe","aria-hidden":"true"}},[e._v("#")]),e._v(" babe")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("epochDuration")]),e._v(": "),a("code",[e._v("u64")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The number of "),a("strong",[e._v("slots")]),e._v(" that an epoch takes. We couple sessions to  epochs, i.e. we start a new session once the new epoch begins.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("expectedBlockTime")]),e._v(": "),a("code",[e._v("Moment")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The expected average block time at which BABE should be creating  blocks. Since BABE is probabilistic it is not trivial to figure out  what the expected average block time should be based on the slot  duration and the security parameter "),a("code",[e._v("c")]),e._v(" (where "),a("code",[e._v("1 - c")]),e._v(" represents  the probability of a slot being empty).")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"balances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#balances","aria-hidden":"true"}},[e._v("#")]),e._v(" balances")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("creationFee")]),e._v(": "),a("code",[e._v("Balance")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee required to create an account.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("existentialDeposit")]),e._v(": "),a("code",[e._v("Balance")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The minimum amount required to keep an account open.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("transactionBaseFee")]),e._v(": "),a("code",[e._v("Balance")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee to be paid for making a transaction; the base.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("transactionByteFee")]),e._v(": "),a("code",[e._v("Balance")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee to be paid for making a transaction; the per-byte portion.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("transferFee")]),e._v(": "),a("code",[e._v("Balance")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee required to make a transfer.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contracts","aria-hidden":"true"}},[e._v("#")]),e._v(" contracts")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("blockGasLimit")]),e._v(": "),a("code",[e._v("Gas")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The maximum amount of gas that could be expended per block. A reasonable  default value is 10_000_000.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("callBaseFee")]),e._v(": "),a("code",[e._v("Gas")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The base fee charged for calling into a contract. A reasonable default  value is 135.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("contractFee")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee required to create a contract instance. A reasonable default value  is 21.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("createBaseFee")]),e._v(": "),a("code",[e._v("Gas")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The base fee charged for creating a contract. A reasonable default value  is 175.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("creationFee")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee required to create an account.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("maxDepth")]),e._v(": "),a("code",[e._v("u32")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The maximum nesting level of a call/create stack. A reasonable default  value is 100.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("maxValueSize")]),e._v(": "),a("code",[e._v("u32")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The maximum size of a storage value in bytes. A reasonable default is 16 KiB.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("rentByteFee")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Price of a byte of storage per one block interval. Should be greater than 0.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("rentDepositOffset")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The amount of funds a contract should deposit in order to offset  the cost of one byte.   Let's suppose the deposit is 1,000 BU (balance units)/byte and the rent is 1 BU/byte/day,  then a contract with 1,000,000 BU that uses 1,000 bytes of storage would pay no rent.  But if the balance reduced to 500,000 BU and the storage stayed the same at 1,000,  then it would pay 500 BU/day.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("signedClaimHandicap")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Number of block delay an extrinsic claim surcharge has.   When claim surcharge is called by an extrinsic the rent is checked  for current_block - delay")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("storageSizeOffset")]),e._v(": "),a("code",[e._v("u32")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Size of a contract at the time of creation. This is a simple way to ensure  that empty contracts eventually gets deleted.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("surchargeReward")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Reward that is received by the party whose touch has led  to removal of a contract.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("tombstoneDeposit")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The minimum amount required to generate a tombstone.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("transactionBaseFee")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee to be paid for making a transaction; the base.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("transactionByteFee")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee to be paid for making a transaction; the per-byte portion.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("transferFee")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The fee required to make a transfer.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"democracy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#democracy","aria-hidden":"true"}},[e._v("#")]),e._v(" democracy")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("cooloffPeriod")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Period in blocks where an external proposal may not be re-submitted after being vetoed.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("emergencyVotingPeriod")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Minimum voting period allowed for an emergency referendum.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("enactmentPeriod")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The minimum period of locking and the period between a proposal being approved and enacted.   It should generally be a little more than the unstake period to ensure that  voting stakers have an opportunity to remove themselves from the system in the case where  they are on the losing side of a vote.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("launchPeriod")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   How often (in blocks) new public referenda are launched.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("minimumDeposit")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The minimum amount to be used as a deposit for a public referendum proposal.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("votingPeriod")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   How often (in blocks) to check for new votes.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"elections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elections","aria-hidden":"true"}},[e._v("#")]),e._v(" elections")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("approvalSetSize")]),e._v(": "),a("code",[e._v("u32")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The chunk size of the approval vector.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("candidacyBond")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   How much should be locked up in order to submit one's candidacy. A reasonable  default value is 9.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("carryCount")]),e._v(": "),a("code",[e._v("u32")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   How many runners-up should have their approvals persist until the next  vote. A reasonable default value is 2.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("decayRatio")]),e._v(": "),a("code",[e._v("u32")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Decay factor of weight when being accumulated. It should typically be set to  "),a("strong",[e._v("at least")]),e._v(" "),a("code",[e._v("membership_size -1")]),e._v(" to keep the collective secure.  When set to "),a("code",[e._v("N")]),e._v(", it indicates "),a("code",[e._v("(1/N)^t")]),e._v(" of staked is decayed at weight  increment step "),a("code",[e._v("t")]),e._v(". 0 will result in no weight being added at all (normal  approval voting). A reasonable default value is 24.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("inactiveGracePeriod")]),e._v(": "),a("code",[e._v("VoteIndex")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   How many vote indices need to go by after a target voter's last vote before  they can be reaped if their approvals are moot. A reasonable default value  is 1.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("presentSlashPerVoter")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The punishment, per voter, if you provide an invalid presentation. A  reasonable default value is 1.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("voterSetSize")]),e._v(": "),a("code",[e._v("u32")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The chunk size of the voter vector.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("votingBond")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   How much should be locked up in order to be able to submit votes.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("votingFee")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The amount of fee paid upon each vote submission, unless if they submit a  "),a("em",[e._v("hole")]),e._v(" index and replace it.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("votingPeriod")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   How often (in blocks) to check for new votes. A reasonable default value  is 1000.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"finalitytracker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finalitytracker","aria-hidden":"true"}},[e._v("#")]),e._v(" finalityTracker")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("reportLatency")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The delay after which point things become suspicious. Default is 1000.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("windowSize")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The number of recent samples to keep from this chain. Default is 101.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[e._v("#")]),e._v(" session")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("dedupKeyPrefix")]),e._v(": "),a("code",[e._v("Bytes")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Used as first key for "),a("code",[e._v("NextKeys")]),e._v(" and "),a("code",[e._v("KeyOwner")]),e._v(" to put all the data into the same branch  of the trie.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking","aria-hidden":"true"}},[e._v("#")]),e._v(" staking")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("bondingDuration")]),e._v(": "),a("code",[e._v("EraIndex")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Number of eras that staked funds must remain bonded for.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("sessionsPerEra")]),e._v(": "),a("code",[e._v("SessionIndex")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Number of sessions per era.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timestamp","aria-hidden":"true"}},[e._v("#")]),e._v(" timestamp")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("minimumPeriod")]),e._v(": "),a("code",[e._v("Moment")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   The minimum period between blocks. Beware that this is different to the "),a("em",[e._v("expected")]),e._v(" period  that the block production apparatus provides. Your chosen consensus system will generally  work with this to determine a sensible block time. e.g. For Aura, it will be double this  period on default settings.")])]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"treasury"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treasury","aria-hidden":"true"}},[e._v("#")]),e._v(" treasury")]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("burn")]),e._v(": "),a("code",[e._v("Permill")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Percentage of spare funds (if any) that are burnt per spend period.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("proposalBond")]),e._v(": "),a("code",[e._v("Permill")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Fraction of a proposal's value that should be bonded in order to place the proposal.  An accepted proposal gets these back. A rejected proposal does not.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("proposalBondMinimum")]),e._v(": "),a("code",[e._v("BalanceOf")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Minimum amount of funds that should be placed in a deposit for making a proposal.")])]),e._v(" "),a("p",[e._v("▸ "),a("strong",[e._v("spendPeriod")]),e._v(": "),a("code",[e._v("BlockNumber")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("summary")]),e._v(":   Period between successive spends.")])])])},[],!1,null,null,null);t.default=o.exports}}]);